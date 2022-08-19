import { createRouter, createWebHistory } from 'vue-router'
import vHome from '../views/v-home.vue'
import privacyPolicy from '../views/privacy-policy.vue'
import termsOfUse from '../views/terms-of-use.vue'
import errorCountry from '../views/error-country.vue'
import errorMobile from '../views/error_mobile.vue'
import errorControl from '../views/error_control.vue'


const router = createRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  history: createWebHistory(),
  routes: [
        {
          path: '/',
          name: 'home',
          component: vHome,
          meta: { title: 'asf' }
        },
        {
          path: '/privacy',
          name: 'privacy',
          component: privacyPolicy
        },
        {
          path: '/terms',
          name: 'terms',
          component: termsOfUse
        },
        {
          path: '/not_avaliable',
          name: 'errorCountry',
          component: errorCountry
        },
        {
          path: '/guard',
          name: 'errorMobile',
          component: errorMobile
        },
        {
          path: '/control',
          name: 'errorControl',
          component: errorControl
        }
  ]
})

export default router
