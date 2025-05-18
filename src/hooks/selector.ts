import { createSelector } from '@reduxjs/toolkit';
import { InitialState } from '../redux/types';

export const selectArticle = (state: InitialState) =>
  state?.productData?.article;

export const selectCart = (state: InitialState) => state?.productData?.cart;

export const selectUser = (state: InitialState) => state?.productData?.user;

export const selectRoot = (state: InitialState) => state;

export const selectMainItems = createSelector(
  [selectArticle],
  article => article
);
