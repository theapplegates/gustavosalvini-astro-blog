import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    rules: {
      "no-console": "error",
      "no-unused-vars": "warn",
      "@typescript/no-unused-vars": "warn", // also add this if you're using typescript
    },
  },
  { ignores: ["dist/**", ".astro", "public/pagefind/**"] },
];
