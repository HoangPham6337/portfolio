import {useEffect, useState} from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({onComplete}: LoadingScreenProps) => {

  const [text, setText] = useState<string>("");
  const fullText: string = "<Loading.../>"

  useEffect(() => {
    let index: number = 0;  // What letter we're in
    const interval: number = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();  // Call the function when done
        }, 900)
      }
    }, 100)

    return () => clearInterval(interval);
  }, [onComplete]);


  return (
    <div className="bg-[#1e1f1e] text-[#db9257] fixed inset-0 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold text-center min-w-[280px]">
        {text}<span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="bg-[#dba070] w-[40%] h-full shadow-[0_0_15px_#969c96] animate-loading-bar"></div>
      </div>
    </div>)
}