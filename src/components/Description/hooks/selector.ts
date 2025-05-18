import { createSelector } from '@reduxjs/toolkit';
import { selectArticle } from '../../../hooks/selector';

export const selectDescriptionItems = createSelector(
  [selectArticle],
  article => ({
    description_short: article?.description_short,
    description_long: article?.description_long,
  })
);
