module.exports = {
  globals: {
    __PATH_PREFIX__: "",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
  },
  setupFiles: ["<rootDir>/loadershim.js"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/**/?(*.)+(spec).[jt]s?(x)"],
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  testURL: "http://localhost:8000",
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
};
