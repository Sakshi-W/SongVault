import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '213e223760msh09840ec7b360906p16814fjsn59e6c2390a51');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChartsList: builder.query({
      query: () => '/charts/list'
    }),
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/get-top-songs-in_country_by_genre?.genre_code=${genre}`
    }),
    getSongsDetails: builder.query({
      query: ({ songid }) => `/songs/get_details/?track_id=${songid}`
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/get-details?.artist_id=${artistId}`
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) => `/charts/get-top-songs-in-country?.country_code=${countryCode}`
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) => `search/multi?.search_type=SONGS_ARTISTS&query=${searchTerm}`
    }),
  }),
});

export const {
  useGetChartsListQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
