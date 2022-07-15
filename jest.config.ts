module.exports = {
  preset: "ts-jest",
  "testEnvironment": "jsdom",
  "transform": {
      // '^.+\\.ts?$': 'ts-jest',
      "^.+\\.jsx?$": "babel-jest",
      // 'node_modules/^.+\\.ts?$': 'ts-jest',
      "\\.(pug)$": "jest-transform-pug"
  },
  "testRegex": '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  "moduleFileExtensions": ['ts', 'js', 'json', 'node'],
  "transformIgnorePatterns": [
      "node_modules/(?!variables/.*)"
  ],
  "roots": [
      "<rootDir>"
  ],
  "moduleDirectories": [
      "node_modules"
  ],
  moduleNameMapper: {
      '^nanoid': require.resolve('nanoid'),
  },
  globals: {
      'ts-jest': {
          diagnostics: {
              exclude: ['**'],
          },
      }
  }
};