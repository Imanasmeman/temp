import { useState } from "react";

function useToggleItems(initialValue, initialPosition = 0) {
  // Validate initialPosition to avoid out-of-bounds index
  const validInitialPosition = 
    initialPosition >= 0 && initialPosition < initialValue.length 
      ? initialPosition 
      : 0;

  const [currentIndex, setCurrentIndex] = useState(validInitialPosition);

  const toggleState = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  return [initialValue[currentIndex], toggleState];
}

export default useToggleItems;
