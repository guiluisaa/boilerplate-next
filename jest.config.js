module.exports = {
  displayName: 'boilerplate-next',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest'
  },
  globals: {
    'babel-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      diagnostics: false
    }
  },
  coverageReporters: ['json', 'html', 'text'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts(x)',
    '!<rootDir>/src/pages/_*',
    '!<rootDir>/src/**/*.stories.(ts|tsx)',
    '!<rootDir>/src/@types/**/*',
    '!<rootDir>/src/components/storybook/**/*',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/**/index.(ts|tsx)'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['<rootDir>/src/**/*.test.+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  verbose: true,
  testURL: 'http://localhost/',
};
