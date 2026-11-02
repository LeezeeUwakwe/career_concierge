import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ["@/assets/css/main.css",
  ],
  components: false,
  ssr: false,

  typescript: {
    typeCheck: false,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ] as any,
  },
})
