import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from '../redux/services/shazamCore';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer, 
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,

  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(shazamCoreApi.middleware), 
});
 
export default store;