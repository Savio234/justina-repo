import { useMemo } from "react";
import { combineReducers, configureStore, EnhancedStore } from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
	createMigrate,
} from "redux-persist";
import { updateStoreVersion } from "./Global";
import { productReducer } from "../reducers/productReducer";


const PERSISTED_KEYS: string[] = ["user"];

const migrations = {
	0: (state: any) => ({
		...state,
	}),
};

const persistConfig = {
	key: "primary",
	whitelist: PERSISTED_KEYS,
	blacklist: ["profile"],
	storage: AsyncStorage,
	version: 0,
	migrate: createMigrate(migrations, { debug: false }),
};

const rootReducer = combineReducers({
	user: productReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = (preloadedState = undefined) =>
	configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: true,
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			}),
		preloadedState,
	});

let store: EnhancedStore | undefined;

export const initializeStore = (preloadedState: any = undefined): EnhancedStore => {
	let _store = store ?? makeStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = makeStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === "undefined") return _store;

	// Create the store once in the client
	if (!store) {
		store = _store;
	}

	return _store;
};

store = initializeStore();

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const persistor = persistStore(store, undefined, () => {
	store!.dispatch(updateStoreVersion());
});

export function useStore(initialState: any) {
	return useMemo(() => initializeStore(initialState), [initialState]);
}

export default store;
