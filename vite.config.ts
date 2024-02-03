import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    require('tailwindcss'),
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
    vue(),
  ],
  css: {
    postcss: {
      plugins: [require('tailwindcss')],
    },
  },
});
