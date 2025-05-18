import { createSelector } from '@reduxjs/toolkit';
import { selectArticle } from '../../../hooks/selector';

export const selectDetails = createSelector([selectArticle], article => ({
  features: article?.features,
  attachments: article?.attachments,
  keywords: article?.keywords,
}));
