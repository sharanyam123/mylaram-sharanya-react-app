import { useDispatch, useSelector } from 'react-redux';
import {
  updateCart,
  updateCartContainerPlacement,
  updateQuantity,
} from '../../../redux/slice';
import { ChangeEvent, useEffect } from 'react';
import { selectCartContainerItems } from './selector';
import { CartContainerRefObjectType } from '../definitions/types';

export default function useCartContainer(ref?: CartContainerRefObjectType) {
  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(updateCartContainerPlacement(!entry?.isIntersecting));
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref?.current) observer.unobserve(ref.current);
    };
  }, []);

  const dispatch = useDispatch();

  const { minimum_order_quantity, unit } = useSelector(
    selectCartContainerItems
  );

  const handleQuantity = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = parseInt(e?.target?.value);
    const renderValue = isNaN(value) ? 0 : value;
    dispatch(updateQuantity(renderValue));
  };

  const handleCart = () => {
    dispatch(updateCart());
  };

  return {
    minimum_order_quantity,
    unit,
    handleQuantity,
    handleCart,
  };
}
