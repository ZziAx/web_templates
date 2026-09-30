import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base:"/",

  plugins: [react(),
    tailwindcss(),
    svgr()

  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './sharedSrc'),
    },
  },

  build: {
    // rollupOptions: {
    //   // Add 'react/jsx-runtime' here
    //   external: ['react', 'react-dom', 'react-responsive', 'react/jsx-runtime'], 
    //   output: {
    //     globals: {
    //       react: 'React',
    //       'react-dom': 'ReactDOM',
    //       // If you externalize react-responsive, add its global here too
    //       // 'react-responsive': 'ReactResponsive', 
    //     }
    //   }
    // }
  }

})
