import type { Config } from 'jest';

const config: Config = {
  rootDir: "./",
  watchPathIgnorePatterns: [
    "<rootDir>/globalConfig.json"
  ],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/test/",
    "/dist/",
  ],
  coverageDirectory: "./coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  preset: '@shelf/jest-mongodb',
};

export default config;
