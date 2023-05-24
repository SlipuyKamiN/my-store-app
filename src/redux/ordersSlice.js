import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://646e4c639c677e23218b7a07.mockapi.io/',
  }),
  tagTypes: ['orders'],
  endpoints: builder => ({
    getAllOrders: builder.query({
      query: () => ({
        url: `/store-orders`,
      }),
      providesTags: ['orders'],
    }),
    createOrder: builder.mutation({
      query: ({ orderItems, customerData, totalPrice }) => ({
        url: '/store-orders',
        method: 'POST',
        body: { orderItems, customerData, totalPrice },
      }),
      invalidatesTags: ['orders'],
    }),
  }),
});

export const { useGetAllOrdersQuery, useCreateOrderMutation } = ordersApi;
