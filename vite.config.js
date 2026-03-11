import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

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
    // node_modules.  The import used by the library is relative
    // (../utils/isLayoutSupported.js), so the earlier version of
    // this alias didn’t actually intercept the specifier.  Here
    // we add two entries: one for the package-style module name
    // (in case other code uses it directly) and one that matches
    // the relative path string so Rollup never tries to resolve
    // a missing file from @mui/material itself.
    alias: [
      {
        find: /^@mui\/material\/esm\/utils\/isLayoutSupported\.js$/,
        replacement: path.resolve(__dirname, 'src/mui-isLayoutSupported.js'),
      },
      {
        // match the literal relative import used inside MUI
        find: '../utils/isLayoutSupported.js',
        replacement: path.resolve(__dirname, 'src/mui-isLayoutSupported.js'),
      },
    ],
  },
  plugins: [react(), svgr()],
})
