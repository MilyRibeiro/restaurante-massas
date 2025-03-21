import js from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals"; // ✅ Importação corrigida

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}", "!eslint.config.mjs", "!**/*.scss"], // ✅ Ignora SCSS
    languageOptions: { 
      globals: { ...globals.browser }, // ✅ Corrigido
      parser: tsParser, 
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".scss"], // ✅ Evita erro ao ler SCSS
      },
    },
    settings: {
      react: {
        version: "detect", // ✅ Define automaticamente a versão do React
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^React$" }]
    },
  },
];
