
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import pinia from "./store"
import naive from "naive-ui"


import "./assets/main.css"

createApp(App)
    .use(router)
    .use(pinia)
    .use(naive)
    .mount("#app")
