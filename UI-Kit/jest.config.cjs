module.exports = {
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/setupTests.js"],  // Указываем путь к файлу setupTests.js
  moduleNameMapper: {
    "\\.module\\.scss$": "identity-obj-proxy",
    "\\.scss$": "identity-obj-proxy",
    "\\.css$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/fileMock.cjs",
    "\\.png$": "<rootDir>/__mocks__/fileMock.cjs",
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!Jest).+\\.js$"],
};

