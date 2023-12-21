/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  bail: true,
  verbose: false,
  modulePaths: ["<rootDir>", "<rootDir>/src"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  roots: ["<rootDir>", "<rootDir>/src"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["node_modules/"],
  watchPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["**/*.test.(ts|tsx)"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  maxWorkers: 2,
  cacheDirectory: "/tmp/jest",
};
