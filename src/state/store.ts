import { configureStore } from '@reduxjs/toolkit';
import { initialDeckState, pokemonDeckSlice } from '@features/pokemon/state/pokemonDeckSlice';
import { pokemonApiSlice } from '@features/pokemon/state/pokemonApiSlice';
import { throttle } from '@utils/throttle';
import { loadState, saveState } from '@utils/localStorage';

// The key used for the app data in local Storage.
const LOCAL_STORAGE_KEY = 'my-app';

// The root reducer for the store.
const rootReducer = {
    [pokemonDeckSlice.reducerPath]: pokemonDeckSlice.reducer,
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer
};

const persistedState = loadState(LOCAL_STORAGE_KEY) || initialDeckState;

/**
 * Set up the redux store. This automatically sets up the redux thunk middleware. We also add
 * the middleware for querying the test API.
 */
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: { [pokemonDeckSlice.reducerPath]: persistedState[pokemonDeckSlice.reducerPath] },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([pokemonApiSlice.middleware])
});

/**
 * Subscribe to updates to the store. When an update occurs, we persist only the deck to local storage.
 * These updates can happen quickly, therefore we throttle the persist function.
 */
store.subscribe(
    throttle(() => {
        const objectToPersist = {
            [pokemonDeckSlice.reducerPath]: store.getState()[pokemonDeckSlice.reducerPath]
        };
        console.log(objectToPersist);
        saveState(LOCAL_STORAGE_KEY, objectToPersist);
    }, 1000)
);

// Infer the `RootState` type from the store itself. The inferred RootState type is based on the root reducer.
export type RootState = ReturnType<typeof store.getState>;

// Infer the type of the dispatch function. Call this AppDispatch as recommended by redux toolkit.
export type AppDispatch = typeof store.dispatch;
