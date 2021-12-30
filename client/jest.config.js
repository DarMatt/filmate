module.exports = {
  // clearMocks: true,
  // collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.(ts|tsx|js)'],
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.+\\.(css|style|less|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mock__/fileMock.js',
  },

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js?)$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  // testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',

  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/index.tsx'],
  coveragePathIgnorePatterns: ['index.tsx', 'App.tsx', '/config/', 'styles.ts'],
};
