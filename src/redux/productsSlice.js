import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  tagTypes: ['products'],
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({ url: '/products/categories' }),
      providesTags: ['products'],
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
      }),
      providesTags: ['products'],
    }),
    getProductsByCategory: builder.query({
      query: categoryName => ({
        url: `/products/category/${categoryName}`,
      }),
      providesTags: ['products'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
