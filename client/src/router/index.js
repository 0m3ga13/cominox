import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/views/Products'
import About from '@/views/About'
import Home from '@/views/HomeView'
import Contact from '@/views/Contact'
import Secteurs from '@/views/Secteurs'
import Devis from '@/views/Devis'
import Offers from '@/views/Offers'
import CuveIsotherme from '@/views/Offers/CuveIsotherme'
import CuveVerticale from '@/views/Offers/CuveVerticale'
import CuveHorizentale from '@/views/Offers/CuveHorizentale'
import Fondoir from '@/views/Offers/Fondoir'
import MelangeurLben from '@/views/Offers/MelangeurLben'
import MelangeurVerticale from '@/views/Offers/MelangeurVerticale'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Secteurs',
    name: 'Secteurs',
    component: Secteurs
  },
  {
    path: '/Devis',
    name: 'Devis',
    component: Devis
  },
  {
    path: '/Offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/CuveIsotherme',
    name: 'CuveIsotherme',
    component: CuveIsotherme
  },
  {
    path: '/CuveHorizentale',
    name: 'CuveHorizentale',
    component: CuveHorizentale
  },
  {
    path: '/CuveVerticale',
    name: 'CuveVerticale',
    component: CuveVerticale
  },
  {
    path: '/Fondoir',
    name: 'Fondoir',
    component: Fondoir
  },

  {
    path: '/MelangeurVerticale',
    name: 'MelangeurVerticale',
    component: MelangeurVerticale
  },
  {
    path: '/MelangeurLben',
    name: 'MelangeurLben',
    component: MelangeurLben
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
