// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Icarus.Sun's Blog",
    },
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/styles/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '', // 在 dark 或 light 类名后面添加 -mode 后缀
    storageKey: 'tool-theme-mode', // 存储颜色模式的键名，用于在本地存储中存储颜色模式的值
  },
})
