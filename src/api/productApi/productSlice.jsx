import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit, skip }) => `/products/?limit=${limit}&skip=${skip}`,
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productSlice;
