import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno, presetWebFonts } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [
        presetIcons(),
        presetAttributify(),
        presetUno(),
        presetWebFonts({
          provider: 'google',
        })
      ]
    })
  ]
})
