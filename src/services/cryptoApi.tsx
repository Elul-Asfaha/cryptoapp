import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const cryptoApiHeaders = {
    "x-rapidapi-host": "conranking.p.rapidapi.com",
    "X-RapidAPI-Key": "d1fd8aa275mshdfbdece75472e69p13a6b7jsnec1cb651fbf3",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url: string) => ({ url, headders: cryptoApiHeaders });
export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/exchanges"),
        }),
    }),
});
