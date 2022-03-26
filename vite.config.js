import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    babel({
      include: ["./src/**"],
      extensions: [".js", ".jsx"],
      babelHelpers: "bundled",
    }),
    react(),
  ],
});
