module.exports = {
  // preset: 'react-native',
  preset: '@testing-library/react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|react-redux)',

    // For pnpm you need to use inlcude `(?!(?:.pnpm/)?` part like this:
    // 'node_modules/(?!(?:.pnpm/)?((jest-)?@?react-native|@react-native-community|@react-navigation))',
  ],
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary'],
  testMatch: [
    '<rootDir>/src/**/*.test.ts?(x)',
    '<rootDir>/src/**/*.test.js?(x)',
  ],
};
