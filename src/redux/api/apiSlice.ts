import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://bookish-server-main-jawadjisan.vercel.app/",
  }),
  tagTypes: ["Books", "Book", "Reviews", "Wishlist", "Booklist"],
  endpoints: () => ({}),
});
