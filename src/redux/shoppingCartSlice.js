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
            if (action.payload.type === 'increment') {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            }
          }
          return product;
        });
        return state;
      },
      prepare(id, type) {
        return { payload: { id, type } };
      },
    },
  },
});

export const { addProduct, deleteProduct, changeQuantity } =
  shoppingCartSlice.actions;

export const shoppingCartReducer = shoppingCartSlice.reducer;
