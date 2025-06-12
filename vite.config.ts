import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import {viteStaticCopy} from "vite-plugin-static-copy";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.*",
          dest: "."
        }
      ]
    })
  ],
  base:"/portfolio",
  server: {
    fs: {
      allow: [".."]
    }
  }
})
