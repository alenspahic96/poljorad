import {createApp} from 'vue'
import { createPinia } from 'pinia'

import router from "@/router";
import i18n from "@/plugins/i18n";
import App from "@/App";
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia());

app.use(router);
app.use(i18n);

app.mount('#app');


AOS.init({
  duration: 1000,
  once: true
})

