import React from "react";
import {useTranslation} from 'react-i18next';

import sample1 from "../../assets/images/samples/Anas platyrhynchos.jpg";
import sample2 from "../../assets/images/samples/Apis mellifera.jpg";
import sample3 from "../../assets/images/samples/Tringa ochropus.jpg";
import other1 from "../../assets/images/samples/Coccinella septempunctata.jpg";
import other2 from "../../assets/images/samples/Evergestis pallidata.jpg";
import other3 from "../../assets/images/samples/Streptopelia turtur.jpg";
import {useIsTouchDevice} from "../../hooks/useIsTouchDevice.ts";


const sampleImages = [
  {src: sample1, alt: 'Anas platyrhynchos'},
  {src: sample2, alt: 'Apis mellifera'},
  {src: sample3, alt: 'Tringa ochropus'},
  {src: other1, alt: 'Coccinella septempunctata'},
  {src: other2, alt: 'Evergestis pallidata'},
  {src: other3, alt: 'Streptopelia turtur'},
];

export type PredictHandler = (url: string) => void;

interface SampleImagesProps {
  onSampleSelect: PredictHandler;
}

export const SampleImages = ({ onSampleSelect }: SampleImagesProps) => {
  const {t} = useTranslation();
  const isTouchDevice = useIsTouchDevice();

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>, imageSrc: string) => {
    e.dataTransfer.setData('application/x-image-url', imageSrc);
  };

  return (
    <div className="my-8">
      <h4 className="text-xl font-bold mb-4 text-center" style={{color: "var(--text-color)"}}>
        {t('internshipBlog.demo.trySamples')}
      </h4>
      <div className="flex flex-wrap justify-center gap-4">
        {sampleImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            draggable={!isTouchDevice}
            onDragStart={(e) => handleDragStart(e, image.src)}
            onClick={() => onSampleSelect(image.src)}
            className="w-24 h-24 object-cover rounded-lg shadow-md cursor-grab transition-transform hover:scale-105"
          />
        ))}
      </div>
      {isTouchDevice && (
        <p className="text-center text-sm mt-2" style={{color: "var(--secondary-text)"}}>
          {t('internshipBlog.demo.tapToTry')}
        </p>
      )}
    </div>
  );
};