// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
import 'react-native-gesture-handler/jestSetup';

export * from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
