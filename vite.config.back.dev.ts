import { resolve } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('frontend/', import.meta.url)),
      '~b/': fileURLToPath(new URL('backend/', import.meta.url)),
      '~s/': fileURLToPath(new URL('sc