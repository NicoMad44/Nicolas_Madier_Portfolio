import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  {rules: {
    // Désactiver pour les composants Three.js
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['args', 'rotation', 'wireframe', 'position', 'scale', 'attach', 'geometry', 'material'],
      },
    ],
  },},
  pluginReact.configs.flat.recommended,
]);
