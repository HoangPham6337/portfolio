import React, {useState, useEffect, useRef, useCallback} from 'react';
import ort, {InferenceSession, Tensor} from 'onnxruntime-web';
import {useTranslation} from 'react-i18next';
import {FaUpload, FaSpinner} from 'react-icons/fa';
import {SampleImages} from "./internshipBlogComponents/SampleImages.tsx";

const viteBaseUrl = import.meta.env.BASE_URL;
const publicPath = viteBaseUrl.endsWith('/') ? viteBaseUrl : `${viteBaseUrl}/`;

ort.env.wasm.wasmPaths = publicPath;


const softmax = (arr: Float32Array): number[] => {
  const max = Math.max(...arr);
  const exps = Array.from(arr).map(x => Math.exp(x - max));
  const sum = exps.reduce((a, b) => a + b);
  return exps.map(x => x / sum);
};

export const ONNXDemo = () => {
  const {t} = useTranslation();
  const [session, setSession] = useState<InferenceSession | null>(null);
  const [loading, setLoading] = useState<{ model: boolean, predicting: boolean }>({model: true, predicting: false});
  const [error, setError] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [result, setResult] = useState<{ label: string, confidence: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        // Construct the full path to the model in the public folder
        const modelPath = `${publicPath}mobilenet_v3_large_80.onnx`;
        const newSession = await InferenceSession.create(modelPath, {
          executionProviders: ['wasm'],
          graphOptimizationLevel: 'all',
        });
        setSession(newSession);
      } catch (e) {
        setError("Failed to load the AI model. It might be a network issue.");
        console.error(e);
      } finally {
        setLoading({model: false, predicting: false});
      }
    };
    loadModel();
  }, []);

  const runModel = useCallback(async (img: HTMLImageElement) => {
    if (!session) return;
    setLoading({model: false, predicting: true});
    setResult(null);

    const modelWidth = 224;
    const modelHeight = 224;
    const centralFraction = 0.875; // Standard for many ImageNet models

    // Create a canvas to perform the operations
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Central Crop
    const originalWidth = img.width;
    const originalHeight = img.height;

    const cropWidth = Math.floor(originalWidth * centralFraction);
    const cropHeight = Math.floor(originalHeight * centralFraction);

    const offsetX = (originalWidth - cropWidth) / 2;
    const offsetY = (originalHeight - cropHeight) / 2;

    // 2. Resize
    canvas.width = modelWidth;
    canvas.height = modelHeight;
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(img, offsetX, offsetY, cropWidth, cropHeight, 0, 0, modelWidth, modelHeight);

    const imageData = ctx.getImageData(0, 0, modelWidth, modelHeight);
    const {data} = imageData; // This is a Uint8ClampedArray: [R, G, B, A, R, G, B, A, ...]

    // 3. Normalize and Transpose (HWC to NCHW)
    const float32Data = new Float32Array(1 * 3 * modelWidth * modelHeight);
    for (let i = 0, j = 0; i < data.length; i += 4, j++) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Normalize from [0, 255] to [-1, 1]
      const normR = (r / 255.0 - 0.5) * 2.0;
      const normG = (g / 255.0 - 0.5) * 2.0;
      const normB = (b / 255.0 - 0.5) * 2.0;

      // Store in NCHW format: C-planes are contiguous in memory
      float32Data[j] = normR;                           // R channel
      float32Data[j + (modelWidth * modelHeight)] = normG; // G channel
      float32Data[j + 2 * (modelWidth * modelHeight)] = normB; // B channel
    }
    const inputTensor = new Tensor('float32', float32Data, [1, 3, 224, 224]);

    try {
      const feeds = {[session.inputNames[0]]: inputTensor};
      const outputMap = await session.run(feeds);
      const outputTensor = outputMap[session.outputNames[0]];

      const probabilities = softmax(outputTensor.data as Float32Array);
      const maxProb = Math.max(...probabilities);
      const maxIndex = probabilities.indexOf(maxProb);

      const labelsPath = `${publicPath}labels.json`;
      const labels = await (await fetch(labelsPath)).json();
      setResult({label: labels[maxIndex], confidence: maxProb});
    } catch (e) {
      setError("An error occurred during prediction.");
      console.error(e);
    } finally {
      setLoading({model: false, predicting: false});
    }
  }, [session]);

  const handleImageUpload = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError("Please upload an image file.");
      return;
    }
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => runModel(img);
      img.src = e.target?.result as string;
      setImageSrc(img.src);
    };
    reader.readAsDataURL(file);
  }, [runModel]);

  const handlePredictSample = useCallback((url: string) => {
    setError(null);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => runModel(img);
    img.src = url;
    setImageSrc(url);
  }, [runModel]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageUpload(e.dataTransfer.files[0]);
    } else {
      const imageUrl = e.dataTransfer.getData('application/x-image-url');
      if (imageUrl) {
        handlePredictSample(imageUrl);
      }
    }
  };

  return (
    <>
      <div className="my-16 p-6 rounded-xl shadow-xl relative border" style={{borderColor: "var(--highlight-green)"}}>
        <h3 className="text-2xl font-bold  text-center" style={{color: "var(--accent-color)"}}>
          {t('internshipBlog.demo.title')}
        </h3>
        <div className="text-center mb-4">
          <p>{t('internshipBlog.demo.modelExplanation')}</p>
        </div>

        {loading.model ? (
          <div className="text-center p-8">
            <FaSpinner className="animate-spin text-4xl mx-auto mb-4"/>
            <p>{t('internshipBlog.demo.loadingModel')}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div
              className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg h-64 text-center cursor-pointer transition hover:border-green-500 bg-[var(--base-variant)]"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <input type="file" accept="image/*" ref={fileInputRef} className="hidden"
                     onChange={(e) => e.target.files && handleImageUpload(e.target.files[0])}/>
              <FaUpload className="text-4xl text-gray-400 mb-3"/>
              <p className="text-sm font-normal">Model: MobileNetV3 - Dom 80%</p>
              <p className="text-sm font-semibold">{t('internshipBlog.demo.dragOrClick')}</p>
              <p className="text-sm font-normal" style={{color: "var(--secondary-text)"}}>{t('internshipBlog.demo.uploadHint')}</p>
            </div>
            <div className="flex flex-col items-center justify-center h-64">
              {loading.predicting && <FaSpinner className="animate-spin text-5xl text-green-500"/>}
              {error && <p className="text-red-500 font-bold">{error}</p>}
              {imageSrc && !loading.predicting && (
                <div className="w-full text-center">
                  <img src={imageSrc} alt="Upload preview" className="max-h-40 mx-auto mb-4 rounded-lg shadow-md border"/>
                  {result && (
                    <div>
                      <p className="text-xl font-bold" style={{color: "var(--highlight-green)"}}>
                        {result.label}
                      </p>
                      <p className="text-md" style={{color: "var(--secondary-text)"}}>
                        {t('internshipBlog.demo.confidence')}: {(result.confidence * 100).toFixed(1)}%
                      </p>
                      {result.confidence < 0.5 && result.label !== 'Other' && (
                        <p className="text-sm mt-2" style={{color: 'var(--highlight-red)'}}>
                          {t('internshipBlog.demo.unsure')}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
              {!imageSrc && !loading.predicting && !error && (
                <p style={{color : "var(--secondary-text)"}}>{t('internshipBlog.demo.waiting')}</p>
              )}

            </div>
          </div>
        )}
      </div>
      {!loading.model && <SampleImages onSampleSelect={handlePredictSample} />}
    </>
  );
};