import { resolve } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import createExternal from 'vite-plugin-external'
import postcss from './postcss.config.js'

export default defineConfig({
  plugins: [
    createExternal({
      externals: {
        'sqlite3': 'sqlite3',
        'node:crypto': 'crypto',
        'node:path': 'path',
        'node:os': 'os',
        'node:fs': 'fs',
      },
    }),
    solidPlugin(),
  ],
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('frontend/', import.meta.url)),
      '~