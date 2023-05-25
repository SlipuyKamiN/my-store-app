import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  tagTypes: ['products'],
  endpoints: builder => ({
    getShops: builder.query({
      query: () => ({ url: '/products/categories' }),
      providesTags: ['products'],
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
      }),
      providesTags: ['products'],
    }),
    getProductsByShop: builder.query({
      query: shopName => ({
        url: `/products/category/${shopName}`,
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
