# eslint-config-ivory

I created this eslint config to have full control over the code style of my repositories.

> An **ivory tower** is a metaphorical place—or an atmosphere—where people are happily cut off from the rest of the world in favor of their own pursuits, usually mental and esoteric ones.

Source: [Wikipedia](https://en.wikipedia.org/wiki/Ivory_tower)

## Usage

Following is the list of all the eslint configs exported by this package.

- [`ivory`](./index.js) – eslint config for the Ivory style guide.
- [`ivory/eslint`](./src/eslint.js) – eslint config for the [built-in eslint rules](https://eslint.org/docs/latest/rules/).
- [`ivory/eslint-comments`](./src/eslint-comments.js) – eslint config for [eslint comments rules](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/).
- [`ivory/import`](./src/import.js) – eslint config for [import rules](https://github.com/import-js/eslint-plugin-import#rules).
- [`ivory/jest`](./src/jest.js) – eslint config for [Jest rules](https://github.com/jest-community/eslint-plugin-jest#rules).
- [`ivory/jsx-a11y`](./src/jsx-a11y.js) – eslint config for [JSX accessibility rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules).
- [`ivory/next`](./src/next.js) – eslint config for [Next.js rules](https://nextjs.org/docs/basic-features/eslint#eslint-plugin).
- [`ivory/promise`](./src/promise.js) – eslint config for [promise rules](https://github.com/xjamundx/eslint-plugin-promise#rules).
- [`ivory/react`](./src/react.js) – eslint config for [React rules](https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules).
- [`ivory/react-hooks`](./src/react-hooks.js) – eslint config for [React hooks rules](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#custom-configuration).
- [`ivory/typescript`](./src/typescript.js) – eslint config for [TypeScript rules](https://typescript-eslint.io/rules/).
- [`ivory/unicorn`](./src/unicorn.js) – eslint config for [unicorn rules](https://github.com/sindresorhus/eslint-plugin-unicorn#rules).

## Installation

1. Run the following command to install `eslint-config-ivory` and its peer dependencies.

   ```bash
   npx install-peerdeps --dev eslint-config-ivory
   ```

2. Create an `.eslintrc.json` file with the following contents.

   ```json
   {
     "root": true,
     "extends": "ivory"
   }
   ```

3. Create a `.prettierrc.json` file with the following contents.

   ```json
   "eslint-config-ivory/.prettierrc.json"
   ```
