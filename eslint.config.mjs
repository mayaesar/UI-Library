// @ts-check
import prettierPlugin from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  prettierPlugin,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    files: ["**/*.ts", "**/*.js", "**/*.mjs", "**/*.vue"],
    rules: {
      // Vue
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",

      // Imports
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",

      // TypeScript
      "@typescript-eslint/prefer-literal-enum-member": "off",
    },
  },
]);
