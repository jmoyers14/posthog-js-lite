module.exports = {
  preset: 'jest-expo',
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node', 'tsx'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['node_modules', 'examples'],
  fakeTimers: { enableGlobally: true },
  transformIgnorePatterns: [],

  testPathIgnorePatterns: ['<rootDir>/lib/', '/node_modules/'],
}
