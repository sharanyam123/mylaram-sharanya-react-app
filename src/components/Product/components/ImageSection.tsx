import { Box, Stack } from '@mui/material';
import { ImageSectionType } from '../definitions/types';
import useImageSection from '../hooks/useImageSection';

export default function ImageSection(props: ImageSectionType) {
  const { images } = props;
  const { currentImage, handleImageClick } = useImageSection();

  return (
    <>
      <Stack className="imageSection" spacing={2}>
        {images?.map((image, index) => (
          <Box
            component={'img'}
            key={index}
            src={image}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </Stack>
      {images?.[currentImage] && (
        <Box
          component={'img'}
          src={images?.[currentImage]}
          className="singleImage"
        />
      )}
    </>
  );
}
