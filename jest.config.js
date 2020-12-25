// eslint-disable-next-line no-undef
module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    // "prisma/(.*)": "<rootDir>/prisma/$1",
    // "tests/(.*)": "<rootDir>/__tests__/$1",
  },
};
