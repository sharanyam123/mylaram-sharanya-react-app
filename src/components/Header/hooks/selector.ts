import { createSelector } from '@reduxjs/toolkit';
import {
  selectArticle,
  selectCart,
  selectRoot,
  selectUser,
} from '../../../hooks/selector';

export const selectHeaderItems = createSelector(
  [selectArticle, selectCart, selectUser, selectRoot],
  (article, cart, user, root) => ({
    title: article?.title,
    cartCount: cart?.items,
    id: article?.id,
    favorites: user?.favorite_articles,
    trigger: root?.trigger,
    showCartInHeader: root?.showCartInHeader,
  })
);
