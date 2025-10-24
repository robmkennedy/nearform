import { configureStore } from '@reduxjs/toolkit';
import { pokemonDeckSlice } from '@features/pokemon/state/pokemonDeckSlice';
import { pokemonApiSlice } from '@features/pokemon/state/pokemonApiSlice';

// The root reducer for the store.
const rootReducer = {
    [pokemonDeckSlice.reducerPath]: pokemonDeckSlice.reducer,
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer
};

/**
 * Set up the redux store. This automatically sets up the redux thunk middleware. We also add
 * the middleware for querying the test API.
 */
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([pokemonApiSlice.middleware])
});

// Infer the `RootState` type from the store itself. The inferred RootState type is based on the root reducer.
export type RootState = ReturnType<typeof store.getState>;

// Infer the type of the dispatch function. Call this AppDispatch as recommended by redux toolkit.
export type AppDispatch = typeof store.dispatch;
