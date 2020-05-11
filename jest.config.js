module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1'
  },
  collectCoverage: true,
  globals: {
    version: true,
    configs: true,
    request: { pageId: 0 }
  },
  transformIgnorePatterns: ['/node_modules/(?!video.js)'],
  verbose: true,
  testURL: 'http://localhost:2137/',
  coverageDirectory: './.jest/coverage/',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.node/',
    '/jest/',
    '.mock.ts'
  ],
  setupFiles: ['./jest.overrides.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  snapshotResolver: './jest.snapshot-resolver.js'
};
