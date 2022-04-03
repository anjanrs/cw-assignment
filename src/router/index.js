import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryPage from '../views/CategoryPage'
import ProductDetailPage from '../views/ProductDetailPage'
import CartPage from '../views/CartPage'
import MorePage from '../views/MorePage'
import JournalPage from '../views/JournalPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CategoryPage
  },
  {
    path: '/category/:category',
    name: 'plates',
    component: CategoryPage
    // component: () => import(/* webpackChunkName: "categoryPage" */ '../views/CategoryPage/index.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetailPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalPage
  },
  {
    path: '/more',
    name: 'more',
    component: MorePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
