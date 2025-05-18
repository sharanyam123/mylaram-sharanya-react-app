import { createSelector } from '@reduxjs/toolkit';
import { selectArticle } from '../../../hooks/selector';

export const selectPricingItems = createSelector([selectArticle], article => ({
  minimum_order_quantity: article?.minimum_order_quantity,
  transport_costs: article?.transport_costs,
  delivery_time: article?.delivery_time,
  currency: article?.currency,
  unit: article?.unit,
  price_breaks: article?.price_breaks,
}));
