import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

const chartData = [
  {label: 'Save All Images', imageSaved: 4518, color: '#2E8B57'}, // Changed to inferenceTime
  {label: 'Hybrid (50% Dom.)', imageSaved: 8961, color: '#D35400'}, // Changed to inferenceTime
  {label: 'Hybrid (80% Dom.)', imageSaved: 19447, color: '#D35400'}, // Changed to inferenceTime
  {label: 'Hybrid (90% Dom.)', imageSaved: 35777, color: '#C0392B'}, // Changed to inferenceTime
];

export const StorageChart: React.FC = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const maxValue = 35777;

    const ctx = gsap.context(() => {
      gsap.set('.bar-fill', {width: 0});

      gsap.utils.toArray('.bar-container').forEach((container: any) => {
        const barFill = container.querySelector('.bar-fill');
        const valueSpan = container.querySelector('.bar-value');

        const numberImageProcessed = parseFloat(container.dataset.value);

        const targetWidthPercentage = (numberImageProcessed / maxValue) * 100;

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
              const currentValue = currentWidthPercentage * numberImageProcessed;
              valueSpan.textContent = `${currentValue.toFixed(0)}s`;
            }
          },
          onComplete: function () {
            if (valueSpan) {
              valueSpan.textContent = `${numberImageProcessed}s`;
            }
          }
        });
      });
    }, chartContainerRef);

    return () => ctx.revert();
  }, []);

  const title = "Total number of images processed before storing 1 GB of images";
  const subtitle = "Average image size: 232.192 KB";

  return (
    <div
      className="my-16 p-4 rounded-xl shadow-xl relative"
      ref={chartContainerRef}
      style={{
        backgroundImage: 'linear-gradient(to right, #007AFF, #1E3A8A)',
      }}
    >
      <div
        className="absolute inset-0 z-0 rounded-xl"
        style={{
          backgroundColor: "var(--aero-color)",
          backdropFilter: 'blur(1000px) saturate(100%) brightness(90%)',
          WebkitBackdropFilter: 'blur(1000px) saturate(100%) brightness(90%)',
        }}
      ></div>
      <div className="relative z-10">
        <h3
          className="text-xl font-bold mb-4 text-center"
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
              data-value={data.imageSaved}
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
                <span className="text-sm bar-value">0.000s</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};