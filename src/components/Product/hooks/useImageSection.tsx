import { useState } from 'react';

export default function useImageSection() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  return {
    currentImage,
    handleImageClick,
  };
}
