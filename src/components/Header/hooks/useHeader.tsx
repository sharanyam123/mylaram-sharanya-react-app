import { useSelector } from 'react-redux';
import { selectHeaderItems } from './selector';

export default function useHeader() {
  const { cartCount, title, favorites, id, trigger, showCartInHeader } =
    useSelector(selectHeaderItems);

  // const isFavoriteProduct = favorites?.includes(id);

  return {
    title,
    cartCount,
    favorites,
    id,
    trigger,
    showCartInHeader,
  };
}
