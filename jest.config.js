module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest/jest-preprocess.js`,
  },
  moduleDirectories: ['node_modules', 'jest/utils'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^config(.*)$': '<rootDir>/config$1',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/jest/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
    '<rootDir>.*/cypress',
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/jest/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/jest/setup-test-env.js`],
}
