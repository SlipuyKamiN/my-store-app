import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apimocha.com/my-burger-store',
  }),
  tagTypes: ['products'],
  endpoints: builder => ({
    getShops: builder.query({
      query: () => ({ url: '/restaurants' }),
      providesTags: ['products'],
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `/restaurants/all`,
      }),
      providesTags: ['products'],
    }),
    getProductsByShop: builder.query({
      query: shopName => ({
        url: `	/restaurants/${shopName}`,
      }),
      providesTags: ['products'],
    }),
  }),
});

export const {
  useGetShopsQuery,
  useGetAllProductsQuery,
  useGetProductsByShopQuery,
} = productsApi;
