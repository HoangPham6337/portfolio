import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

interface LoadingScreenProps {
  isLoaded: boolean;
  onComplete: () => void;
}

export const LoadingScreen = ({isLoaded, onComplete}: LoadingScreenProps) => {
  const {t} = useTranslation();

  const [text, setText] = useState<string>("");
  const fullText: string = t("loading")

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
  }, [fullText, onComplete]);


  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isLoaded ? "opacity-0" : "opacity-100"}`}
      style={{
        backgroundColor: "var(--base-color)",
        color: "var(--highlight-orange)",
      }}
    >
      <div className="mb-4 text-4xl font-mono font-bold text-center min-w-[280px]">
        {text}<span className="animate-blink ml-1">|</span>
      </div>

      <div
        className="w-[200px] h-[2px] rounded relative overflow-hidden"
        style={{backgroundColor: "var(--secondary-text)"}}
      >
        <div
          className="w-[40%] h-full shadow-[0_0_15px_#969c96] animate-loading-bar"
          style={{
            backgroundColor: "var(--highlight-orange)",
            boxShadow: "0 0 15px var(--highlight-green)"
          }}
        ></div>
      </div>
    </div>)
}