import {combineReducers, configureStore} from '@reduxjs/toolkit';
import favouriteSlice from './favourite.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RenderOptions} from '@testing-library/react-native';

const reducers = combineReducers({
  [favouriteSlice.reducerPath]: favouriteSlice.reducer,
});
export type RootState = ReturnType<typeof reducers>;
export interface RootSliceType<T = any> {
  state: T | RootState;
}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};
