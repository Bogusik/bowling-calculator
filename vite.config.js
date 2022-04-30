import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import config from "./config";

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, "client"),
  plugins: [vue()],
  server: {
    port: config.clientPort,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(
        new URL(resolve(__dirname, "client/src"), import.meta.url)
      ),
    },
  },
});
