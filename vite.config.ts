import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("recharts") ||
            id.includes("d3-") ||
            id.includes("victory-")
          ) {
            return "vendor-charts";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
