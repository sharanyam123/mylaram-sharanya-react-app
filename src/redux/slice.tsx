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
    updateCart: (state, action: PayloadAction<number>) => {
      state.productData.cart.items += action?.payload;
    },
    updatePageScroll: (state, action: PayloadAction<boolean>) => {
      state.trigger = action?.payload;
    },
    updateCartContainerPlacement: (state, action: PayloadAction<boolean>) => {
      state.showCartInHeader = action?.payload;
    },
    updateFavorites: (state, action: PayloadAction<{ id: number }>) => {
      if (
        state.productData.user.favorite_articles?.includes(action?.payload?.id)
      ) {
        state.productData.user.favorite_articles =
          state.productData.user.favorite_articles?.filter(
            ele => ele !== action?.payload?.id
          );
      } else {
        state.productData.user.favorite_articles = [
          ...state.productData.user.favorite_articles,
          action?.payload?.id,
        ];
      }
    },
    resetCart: state => {
      state.productData.cart.items = 0;
    },
  },
});

export const {
  loadData,
  updateQuantity,
  updateCart,
  updatePageScroll,
  updateCartContainerPlacement,
  updateFavorites,
  resetCart,
} = productSlice.actions;

export default productSlice.reducer;
