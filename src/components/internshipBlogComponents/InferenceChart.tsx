// src/components/AccuracyChart.tsx
import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

const chartData = [
  {label: 'MobileNetV3 (light)', inferenceTime: 0.078, color: '#2E8B57'}, // Changed to inferenceTime
  {label: 'ConvNeXt-XL (heavy)', inferenceTime: 3.159, color: '#D35400'}, // Changed to inferenceTime
];

export const InferenceChart: React.FC = () => { // Removed props if metric is hardcoded
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const maxValue = 4;

    const ctx = gsap.context(() => {
      gsap.set('.bar-fill', {width: 0});

      gsap.utils.toArray('.bar-container').forEach((container: any) => {
        const barFill = container.querySelector('.bar-fill');
        const valueSpan = container.querySelector('.bar-value');

        const actualInferenceTime = parseFloat(container.dataset.value);

        const targetWidthPercentage = (actualInferenceTime / maxValue) * 100;

        gsap.to(barFill, {
          width: `${targetWidthPercentage}%`, // Use the calculated percentage
          ease: 'power2.out',
          duration: 1.0,
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            if (valueSpan && barFill.offsetWidth > 0) {
              const currentWidthPercentage = (barFill.offsetWidth / barFill.parentElement.offsetWidth);
              const currentValue = currentWidthPercentage * actualInferenceTime;
              valueSpan.textContent = `${currentValue.toFixed(3)}s`;
            }
          },
          onComplete: function () {
            if (valueSpan) {
              valueSpan.textContent = `${actualInferenceTime.toFixed(3)}s`;
            }
          }
        });
      });
    }, chartContainerRef);

    return () => ctx.revert();
  }, []);

  const title = "Inference Time for 1 Image";
  const subtitle = "Results measured on Raspberry Pi 4B with 8GB of RAM";

  return (
    <div
      className="my-8 rounded-xl pb-4 pr-4 pl-4 pt-0.5 shadow-xl relative"
      ref={chartContainerRef}
      style={{
        backgroundImage: 'linear-gradient(to right, #007AFF, #1E3A8A)',
      }}
    >
      <div
        className="absolute inset-0 z-0 rounded-xl" // Absolute positioning to cover the whole block
        style={{
          backgroundColor: "var(--aero-color)",
          backdropFilter: 'blur(10px) saturate(100%) brightness(90%)',
          WebkitBackdropFilter: 'blur(10px) saturate(100%) brightness(90%)',
        }}
      ></div>
      <div className="relative z-10">
        <h3
          className="text-xl font-bold mt-0 pt-0 mb-4 text-center"
          style={{color: 'var(--text-color)'}}
        >
          {title}
        </h3>
        <p
          className="text-sm md:text-lg mb-6 text-center"
          style={{color: 'var(--text-color)'}}
        >
          {subtitle}
        </p>

        <div className="space-y-4">
          {chartData.map((data, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bar-container"
              data-value={data.inferenceTime}
            >
              <div className="w-1/4 text-right pr-4 text-sm font-medium" style={{color: 'var(--text-color)'}}>
                {data.label}
              </div>
              <div className="relative flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                <div
                  className="bar-fill h-full rounded-full"
                  style={{backgroundColor: data.color}}
                >
                </div>
              </div>
              <div className="w-20">
                <span className="text-sm font-bold bar-value">0.000s</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};