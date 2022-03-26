import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import reactRefresh from "@vitejs/plugin-react-refresh";
import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    reactRefresh(),
    babel({
      include: ["./src/**"],
      extensions: [".js", ".jsx"],
      babelHelpers: "bundled",
    }),
    react(),
  ],
});
