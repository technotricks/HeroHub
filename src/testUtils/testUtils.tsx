import * as React from 'react';
import {RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {persistor, store as s, RootState, persistedReducer} from '@/store';
import {render} from '@testing-library/react-native';
import {MockedProvider, MockedResponse} from '@apollo/client/testing';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from '@reduxjs/toolkit';
import {Favouritetate} from '@/store/favourite.slice';
import {PersistPartial} from 'redux-persist/es/persistReducer';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
type RootReducerType = DeepPartial<ReturnType<typeof persistedReducer>>;

export type CustomRenderOptions = {
  mockData?: ReadonlyArray<MockedResponse<any, any>>;
  initialState?: RootReducerType;
  _store?: ReturnType<typeof configureAPPStore>;
};

export function renderWithRedux(
  ui: React.ReactElement,
  {
    mockData,
    initialState,
    _store = configureAPPStore(initialState),
  }: CustomRenderOptions,
) {
  const ReduxWrapper = ({children}: {children: React.ReactNode}) => (
    <Provider store={_store}>
      <PersistGate loading={null} persistor={persistor}>
        <MockedProvider mocks={mockData} addTypename={false}>
          {children}
        </MockedProvider>
      </PersistGate>
    </Provider>
  );
  return render(ui, {wrapper: ReduxWrapper});
}

export function renderWithReduxNav(
  ui: React.ReactElement,
  {
    mockData,
    initialState,
    _store = configureAPPStore(initialState),
  }: CustomRenderOptions,
) {
  const ReduxWrapper = ({children}: {children: React.ReactNode}) => (
    <Provider store={_store}>
      <PersistGate loading={null} persistor={persistor}>
        <MockedProvider mocks={mockData} addTypename={false}>
          <NavigationContainer>{children}</NavigationContainer>
        </MockedProvider>
      </PersistGate>
    </Provider>
  );
  return render(ui, {wrapper: ReduxWrapper});
}

const configureAPPStore = (initialState: any) => {
  const mergeInitialState = {...initialState};
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState: mergeInitialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  return store;
};

export * from '@testing-library/react-native';
export {renderWithRedux as render};
