import { createApp } from "vue";
import App from "./App.vue";
import Auth from "@okta/okta-vue";
import sampleConfig from "@/config";
// import Vue from 'vue'
import router from "./router";
import store from "./store";
import "./polyfills";

//Vue.use()
const app = createApp(App)
    .use(Auth, sampleConfig.oidc)
    .use(router)
    .use(store)

var vm = app.mount("#app");
console.log(vm)