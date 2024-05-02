import { PROPERTY_URL } from "../apiRoutes";
import { apiSlice } from "./apiSlice";

const propertySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => ({
        url: `${PROPERTY_URL}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Properties"],
    }),
    getSingleProperty: builder.query({
      query: (propertyId) => ({
        url: `${PROPERTY_URL}${propertyId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProperty: builder.mutation({
      query: (data) => ({
        url: `${PROPERTY_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Property"],
    }),
    updateProperty: builder.mutation({
      query: (data) => ({
        url: `${PROPERTY_URL}${data.propertyDetailsId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Property"],
    }),
    deleteProperty: builder.mutation({
      query: (propertyId) => ({
        url: `${PROPERTY_URL}${propertyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Property"],
    }),
  }),
});

export const {
  useGetAllPropertiesQuery,
  useGetSinglePropertyQuery,
  useCreatePropertyMutation,
  useUpdatePropertyMutation,
  useDeletePropertyMutation,
} = propertySlice;
