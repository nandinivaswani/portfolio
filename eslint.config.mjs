import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next (recursive, so nested build
    // output like Claude Code worktrees under .claude/ is also skipped):
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "next-env.d.ts",
    ".claude/**",
  ]),
]);

export default eslintConfig;
