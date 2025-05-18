import { createSelector } from '@reduxjs/toolkit';
import { selectArticle } from '../../../hooks/selector';

export const selectCartContainerItems = createSelector(
  [selectArticle],
  article => ({
    minimum_order_quantity: article?.minimum_order_quantity,
    unit: article?.unit,
  })
);
