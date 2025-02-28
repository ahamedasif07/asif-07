import { useState, useEffect } from "react";

const TypingSVG = () => {
  const fullText = "Fron-End Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[full] h-[100px] flex justify-start">
      <h2>{displayText}</h2>
    </div>
  );
};

export default TypingSVG;
