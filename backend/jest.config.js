module.exports = {
  preset: 'ts-jest',
  bail: true,
  testEnvironment: 'jest-environment-node',
  verbose: true,
  setupFiles: ['./tests/setup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  maxWorkers: 2,
  cacheDirectory: '/tmp/jest',
  watchPathIgnorePatterns: ['/node_modules/', '/dist']
}
