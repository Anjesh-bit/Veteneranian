import { useState } from "react";

//custom hooks for next and prev, but used the package , only for demonstration
const useImageSlider = (initialvals, data) => {
  const [index, setIndex] = useState(initialvals);
  const handleNext = (event) => {
    event.preventDefault();
    if (index !== data.length - 3) {
      setIndex((prev) => prev + 3);
    }
  };
  
  const handlePrev = (event) => {
    event.preventDefault();
    setIndex((prev) => Math.max(prev - 3, 0));
  };
  return { handleNext, handlePrev, index };
};

export default useImageSlider;
