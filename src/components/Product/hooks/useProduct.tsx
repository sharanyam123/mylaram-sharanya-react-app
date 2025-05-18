import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { selectProductItems } from './selector';

export default function useProduct() {
  const cartRef = useRef<HTMLDivElement | null>(null);

  const { descriptionData, priceDetailsData, images, stars } =
    useSelector(selectProductItems);

  return {
    descriptionData,
    priceDetailsData,
    stars,
    images,
    cartRef,
  };
}
