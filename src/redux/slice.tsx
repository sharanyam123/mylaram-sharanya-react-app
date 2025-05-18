import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState, RootObject } from './types';

const initialState: InitialState = {
  productData: {} as RootObject,
  trigger: false,
  showCartInHeader: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<RootObject>) => {
      state.productData = action?.payload;
    },
    updateQuantity: (state, action: PayloadAction<number>) => {
      state.productData.article.minimum_order_quantity = action?.payload;
    },
    updateCart: state => {
      state.productData.cart.items += 1;
    },
    updatePageScroll: (state, action: PayloadAction<boolean>) => {
      state.trigger = action?.payload;
    },
    updateCartContainerPlacement: (state, action: PayloadAction<boolean>) => {
      state.showCartInHeader = action?.payload;
    },
  },
});

export const {
  loadData,
  updateQuantity,
  updateCart,
  updatePageScroll,
  updateCartContainerPlacement,
} = productSlice.actions;

export default productSlice.reducer;
