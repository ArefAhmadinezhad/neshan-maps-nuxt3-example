// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  app: {  
      head: {
          title:'گروه نرم افزاری عارف - arefco.pro', 
          meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'initial-scale=1, user-scalable=no, width=device-width, height=device-height, viewport-fit=cover' },
              { name: 'mobile-web-app-capable', content: 'yes' },
              { name: 'referrer', content: 'origin' },
              { name: 'apple-touch-fullscreen', content: 'yes' },
              { name: 'apple-mobile-web-app-capable', content: 'yes' },
              { name: 'description', content: 'گروه نرم افزاری عارف - arefco.pro' },
              { name: 'og:description', content: 'گروه نرم افزاری عارف - arefco.pro' }, 
              { name: 'og:image', content: '/apple-touch-icon.png' },
              { name: 'og:site_name', content: 'گروه نرم افزاری عارف - arefco.pro'  },
              { name: 'og:title', content: 'گروه نرم افزاری عارف - arefco.pro'  },
              { name: 'twitter:description', content: 'گروه نرم افزاری عارف - arefco.pro' },
              { name: 'twitter:title', content: 'گروه نرم افزاری عارف - arefco.pro'  },
              { name: 'twitter:site_name', content: 'گروه نرم افزاری عارف - arefco.pro'  },
              { name: 'twitter:image', content: '/apple-touch-icon.png' },
              { name: 'theme-color', content: '#5bbad5' },
          
          ],
          link: [
              { rel: 'icon',  href: '/favicon.ico' },
              { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }, 
          ]
      },
  },   
  css: [
      "@/assets/css/site/style.min.css" ,  
  ], 
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {}, 
    },
  } 
  
})