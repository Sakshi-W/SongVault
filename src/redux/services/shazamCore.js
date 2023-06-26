import { createApi, fetchBaseQuery } from '@reduxjs/toolkit';

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
    getTopCharts: builder.query({ queryFn: () => 'v1/charts/world' }),
    getSongsByGenre: builder.query((genre) => ({
      queryFn: () => `v1/charts/genre-world?genre_code=${genre}`,
    })),
    getSongsByCountry: builder.query((countryCode) => ({
      queryFn: () => `v1/charts/country?country_code=${countryCode}`,
    })),
    getSongsBySearch: builder.query((searchTerm) => ({
      queryFn: () => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    })),
    getArtistDetails: builder.query((artistId) => ({
      queryFn: () => `v2/artists/details?artist_id=${artistId}`,
    })),
    getSongDetails: builder.query(({ songid }) => ({
      queryFn: () => `v1/tracks/details?track_id=${songid}`,
    })),
    getSongRelated: builder.query(({ songid }) => ({
      queryFn: () => `v1/tracks/related?track_id=${songid}`,
    })),
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
