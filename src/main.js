import { createApp } from 'vue'
import smoothscroll from 'smoothscroll-polyfill'
import VueLazyloadNext from 'vue-lazyload-next'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

import './design/css/app.scss'
import './console-quote'

smoothscroll.polyfill()

createApp(App)
  .use(VueLazyloadNext, {
    observer: true,
  })
  .use(createHead())
  .use(router)
  .mount('#app')
