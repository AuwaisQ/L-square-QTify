import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    // include .js extension to help Rollup find files in dependencies
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],

    // Workaround for mysterious Vercel build error where Rollup
    // cannot resolve "../utils/isLayoutSupported.js" inside the
    // @mui/material package.  The file exists locally, but some
    // installs on remote machines appear to drop it, causing the
    // same error that prompted this change.  We simply alias the
    // path to a local copy so the resolver never has to look in
    // node_modules.
    alias: {
      '@mui/material/esm/utils/isLayoutSupported.js':
        '/src/mui-isLayoutSupported.js',
    },
  },
  plugins: [react(), svgr()],
})
