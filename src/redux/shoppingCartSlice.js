import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: [],
  reducers: {
    addProduct: {
      reducer(state, action) {
        state = [...state, action.payload];
        return state;
      },
      prepare(product) {
        return {
          payload: { ...product, quantity: 1 },
        };
      },
    },
    deleteProduct: {
      reducer(state, action) {
        state = state.filter(({ id }) => id !== action.payload.id);
        return state;
      },
      prepare(id) {
        return { payload: { id } };
      },
    },
    changeQuantity: {
      reducer(state, action) {
        state = state.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.counterValue,
            };
          }
          return product;
        });
        return state;
      },
      prepare(id, counterValue) {
        return { payload: { id, counterValue } };
      },
    },
    clearShoppingCart: {
      reducer(state) {
        state = [];
        return state;
      },
    },
  },
});

export const { addProduct, deleteProduct, changeQuantity, clearShoppingCart } =
  shoppingCartSlice.actions;

export const shoppingCartReducer = shoppingCartSlice.reducer;
