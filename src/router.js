import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import CareView from './views/CareView.vue'
import AboutView from './views/AboutView.vue'
import ReviewView from './views/ReviewView.vue'
import ContactView from './views/ContactView.vue'
import HorsesView from './views/HorsesView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ReviewView,
      path: '/reviews'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: CareView,
      path: '/care'
    },
    {
      component: HorsesView,
      path: '/care/horses'
    }
  ],
  scrollBehavior() {
    return { top: 0 }
    // Smooth transition instead of instant jump to top
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' })
    //     resolve()
    //   }, 0)
    // })
  }
})
