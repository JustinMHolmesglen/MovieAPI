import { compile } from "ejs";
import { readFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(), 
    viteTsconfigPaths(),
    svgr({
      include: '**/*.svg?react',
    }),
    {
      name: "ejs",
      async transform(code, id) {
        if (id.endsWith(".ejs")) {
          const src = await readFile(id, "utf-8");
          const compiledCode = compile(src, {
            client: true,
            strict: true,
            localsName: "env",
            views: [resolve(__dirname, "views")],
            filename: relative(__dirname, id),
          }).toString();
          return {
            code: `export default ${compiledCode}`,
            map: null // Optional, but typically you'd want to provide source maps
          };
        }
      },
    },
    
  ],

  server: {
    open: true,
    port: 3000,
  }
});



