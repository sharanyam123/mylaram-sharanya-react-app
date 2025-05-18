import { createSelector } from '@reduxjs/toolkit';
import { selectArticle } from '../../../hooks/selector';

export const selectProductItems = createSelector([selectArticle], article => ({
  descriptionData: {
    title: article?.title,
    supplier_name: article?.supplier_name,
    supplier_link: article?.supplier_link,
  },
  priceDetailsData: {
    price: article?.price,
    currency: article?.currency,
    transport_costs: article?.transport_costs,
    vat_percent: article?.vat_percent,
  },
  stars: article?.stars,
  images: article?.images,
}));
