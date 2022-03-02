import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ReviewView from './views/ReviewView.vue'
import ContactView from './views/ContactView.vue'
import BookingView from './views/BookingView.vue'

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
      component: BookingView,
      path: '/booking'
    }
  ]
})
