// .eslintrc.js
// https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js
// https://www.npmjs.com/package/eslint-config-nextjs
// https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest
// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },
  plugins: ["@typescript-eslint", "import", "react"],
  extends: [
    "eslint:recommended", // eslint default rules
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended", // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:jsx-a11y/recommended", // accessibility plugin
  ],
  rules: {
    "react/prop-types": "off", // We turn off prop-types rule, as we will use TypeScript's types instead.
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
    react: {
      version: "detect",
    },
    files: ["**/*.ts", "**/*.tsx"],
  },
  // overrrides: [
  //   {
  //     files: ["**/*.ts", "**/*.tsx"],
  //   },
  // ],
};
