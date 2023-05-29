module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  };