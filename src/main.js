import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VOtpInput from "vue3-otp-input";
import "./style.css"
import router from "./routers"
loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .component('v-otp-input', VOtpInput)
  .mount('#app')
