import { Article } from '../../../redux/types';

export type DescriptionType = Pick<Article, 'title'> & {
  showCartInHeader: boolean;
};

export type CartIconType = {
  cartCount: number;
};

export type IconsSectionType = {
  // isFavoriteProduct: boolean;
  favorites: number[];
  id: number;
};
