// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Common } from '../Models/Common'
import { products } from '../Models/Products'
import { baseUrl } from './config'

// Define a service using a base URL and expected endpoints
export const DummyApi = createApi({
  reducerPath: 'DummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<Common<products>, string>({
      query: (dataQuery: string) => `products?skip=${JSON.parse(dataQuery).skip}&limit=${JSON.parse(dataQuery).limit}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductQuery } = DummyApi
