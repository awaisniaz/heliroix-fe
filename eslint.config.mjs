import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rule overrides
  
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    rules: {
      // Turn off strict typing rule for `any`
      "@typescript-eslint/no-explicit-any": "off",

      // Show warnings instead of blocking build
      "@typescript-eslint/no-unused-vars": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-key": "warn",

      // Disable img optimization warnings
      "@next/next/no-img-element": "off",

      // Optional: silence unused imports if needed
      "no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;



