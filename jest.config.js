module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'text-summary'],
  testMatch: [
    '<rootDir>/src/**/*.test.ts?(x)',
    '<rootDir>/src/**/*.test.js?(x)',
  ],
};
