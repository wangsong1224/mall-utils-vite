import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 引入公共样式变量
import {normalizePath} from 'vite';
// 如果类型报错,需要安装 @types/node: pnpm i @types/node -D
import path from 'path';
// 全局路径 用normalizePath 解决 window 下的路径问题
// normalizePath('foo\\bar') // 'foo/bar'
// normalizePath('foo/bar') // 'foo/bar'
const variablePathScss=normalizePath(path.resolve('./src/variable.scss'));
const variablePathLess=normalizePath(path.resolve('./src/variable.less'))

// https://vitejs.dev/config/
export default defineConfig({
  // css相关配置
  css:{
    // css预处理器配置
    preprocessorOptions:{
      scss:{
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        // 相当于注入代码,注意后面有个分号 不然会报错 这是@import 语句造成的
        additionalData:`@import '${variablePathScss}';`
      },
      less:{
        additionalData:`@import '${variablePathLess}';`
      }
    }
  },
  plugins: [react()]
})
