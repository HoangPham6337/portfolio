// src/components/AccuracyChart.tsx
import React, {useEffect, useRef} from 'react';
import {gsap} from 'gsap';


// Define your data
const chartData = [
  {label: 'MobileNetV3 (Full)', accuracy: 75.2, f1: 78.4, color: '#2E8B57'},
  {label: 'ConvNeXt-XL (Full)', accuracy: 88.2, f1: 91.8, color: '#D35400'},
  {label: 'Hybrid (50% Dom.)', accuracy: 86.9, f1: 89.1, color: '#C0392B'},
  {label: 'Hybrid (80% Dom.)', accuracy: 85.2, f1: 85.4, color: '#C0392B'},
  {label: 'Hybrid (90% Dom.)', accuracy: 84.7, f1: 84.5, color: '#C0392B'},
];

interface AccuracyChartProps {
  metric: 'accuracy' | 'f1';
}

export const AccuracyChart: React.FC<AccuracyChartProps> = ({metric}) => {
  const chartContainerRef = useRef(null); // Ref for the main chart container

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.bar-fill', {width: 0});

      // Animate bars when the chart container scrolls into view
      gsap.utils.toArray('.bar-container').forEach((container: any) => {
        const barFill = container.querySelector('.bar-fill');
        const valueSpan = container.querySelector('.bar-value');
        const targetValue = parseFloat(container.dataset.value);

        gsap.to(barFill, {
          width: `${targetValue}%`,
          ease: 'power2.out',
          duration: 1.0,
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
            // markers: true, // Uncomment for debugging ScrollTrigger
          },
          onUpdate: function () {
            if (valueSpan) {
              const currentWidthPercentage = (barFill.offsetWidth / barFill.parentElement.offsetWidth) * 100;
              valueSpan.textContent = `${currentWidthPercentage.toFixed(1)}%`;
            }
          },
          onComplete: function () {
            if (valueSpan) {
              valueSpan.textContent = `${targetValue.toFixed(1)}%`;
            }
          }
        });
      });
    }, chartContainerRef);

    // Cleanup function for GSAP context
    return () => ctx.revert();
  }, [metric]); // Re-run effect if metric changes

  const title = metric === 'accuracy' ? 'Accuracy Evaluation Result' : 'Macro F1 Evaluation Result';
  const subtitle = `(Values in % based on ${metric === 'accuracy' ? 'Accuracy' : 'Macro F1'})`;

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
          className="text-sm md:text-lg text-center"
          style={{color: 'var(--text-color)'}}
        >
          {subtitle}
        </p>
        <p
          className="text-sm md:text-lg text-center"
          style={{color: 'var(--text-color)'}}
        >
          Hybrid = MobileNetV3 + ConvNeXt
        </p>

        <div className="space-y-4">
          {chartData.map((data, index) => (
            <div key={index} className="flex items-center space-x-4 bar-container" data-value={data[metric]}>
              <div className="w-1/4 text-right pr-4 text-sm font-medium">
                {data.label}
              </div>
              <div className="relative flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                <div
                  className="bar-fill h-full rounded-full flex items-center justify-end pr-2 text-white text-xs font-semibold"
                  style={{backgroundColor: data.color}}
                >
                  <span className="text-sm bar-value">0%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};