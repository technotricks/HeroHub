import {
  combineReducers,
  configureStore,
  createSelectorCreator,
} from '@reduxjs/toolkit';
import favouriteSlice from './favourite.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import memoize from 'lodash.memoize';

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
  // whitelist: ['auth', 'counter'],
};
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const hasFn = (...args: any[]) =>
  args.reduce((acc, val) => acc + '-' + JSON.stringify(val), '');
export const customSelectorCreator = createSelectorCreator(memoize, hasFn);
export const createParameterSelector =
  (selector: {(param: any): any; (arg0: any): any}) => (_: any, params: any) =>
    selector(params);

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};
