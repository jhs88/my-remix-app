import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ['**/*.css'],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      // TODO: when mui has esm support, remove this (default is esm)
      // check it https://github.com/mui/material-ui/issues/30671
      serverModuleFormat: 'cjs',
    }),
    tsconfigPaths(),
  ],
});
