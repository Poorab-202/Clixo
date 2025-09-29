import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import Products from "../pages/Products.vue"
import ProductDetails from "../pages/ProductDetails.vue"
import Order from "../pages/Order.vue"
import Contact from "../pages/Contact.vue"
import About from "../pages/About.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/products/:id", component: ProductDetails, props: true },
  { path: "/order/:id", component: Order, props: true },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
