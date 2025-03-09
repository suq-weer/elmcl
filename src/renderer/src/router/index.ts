import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DownloadView from '@renderer/views/DownloadView.vue'
import DownloadList from '@renderer/views/download/DownloadList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/download',
      name: 'download',
      component: DownloadView,
      children: [
        {
          path: ':category',
          name: 'game',
          component: DownloadList,
          props: true
        }
      ]
    }
  ]
})

export default router
