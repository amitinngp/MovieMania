/* eslint-disable no-undef */
module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.css$": "<rootDir>/jestCssTransform.js",
    },
     // Setup Enzyme
   "snapshotSerializers": ["enzyme-to-json/serializer"],
   "setupFilesAfterEnv": ["<rootDir>/src/setupEnzyme.ts"],
  }
