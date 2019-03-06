import Vue from "vue";
import VueFormGenerator from "../../../src";
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueFormGenerator);
Vue.use(BootstrapVue)

import App from "./app.vue";

new Vue({
	...App
}).$mount("#app");
