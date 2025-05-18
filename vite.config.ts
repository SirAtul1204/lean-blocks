import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, relative, extname } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { glob } from "glob";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "tailwindcss"],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync("lib/**/*.{ts,tsx}").map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url)),
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
    copyPublicDir: true,
  },
});
