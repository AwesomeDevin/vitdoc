import { defineConfig } from "vite";
import cdnExternals from "vite-plugin-cdn-externals";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@alife/dada-vision-utils": path.resolve(__dirname, "/mock/vision-utils"),
    },
  },
  build: {
    minify: false,
    outDir: "dist/view",
    lib: {
      name: "runtime",
      entry: "./view/runtime.tsx",
      formats: ["es"],
    },
    rollupOptions: {
      external:['vite/dynamic-import-polyfill'],
      output: {
        entryFileNames: "[name].js",
      },
    },
  },

  plugins: [
    cdnExternals({
      react: "React",
      "react-dom": "ReactDOM",
      moment: "moment",
      "moment-timezone": "moment",
    }),
  ],
});
