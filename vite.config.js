import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: "/src",
      Components : "/src/Components",
      Configs: "/src/Config",
      Assets: "/src/Assets",
      Helper: "/src/Helper",
      Layouts: "/src/Layouts",
      Pages: "/src/Pages",
      Redux: "/src/Redux",
      Routes: "/src/Routes",

    }
  }
})
