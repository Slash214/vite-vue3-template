import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve  } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathResolve = (dir:string) => resolve (__dirname, dir)

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src'), // 设置 @ 指向 src 目录
      views: pathResolve('./src/views'),  // 设置 `views` 指向 `./src/views` 目录，下同
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets')
    }
  },
  // base: './',
  build: {
    outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      }
    },
    chunkSizeWarningLimit: 1500 // chunk大小警告 kbs
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/style/variables.scss";
        `,
        javascriptEnabled: true,
      }
    }
  },
  server: {
    port: 4000,
    open: true,
    cors: true,
  }
})
