import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core7.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "213e223760msh09840ec7b360906p16814fjsn59e6c2390a51");
      headers.set("X-RapidAPI-Host", "shazam-core7.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "charts/get-top-songs-in-world",
      providesTags: ["TopCharts"],
    }),
    getSongsByGenre: builder.query({
      query: (genreCode) => `charts/get-top-songs-in_world_by_genre?genre=${genre}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `charts/get-top-songs-in-country=${countryCode}`,
    }),
    getSongsBySearch: builder.query({
      query: (term) => `search/multi?search_type=SONGS_ARTISTS&query=${term}`,
    }),
    getArtistDetails: builder.query({
      query: (id) => `artist/get-details'?id=${id}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `song/get_/details?id=${id}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `songs/list-recommendations?id=${id}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
