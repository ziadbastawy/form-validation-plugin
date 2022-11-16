import Vue from "vue";
import App from "./App.vue";
import validationPlugin from "./validationPlugin";

Vue.config.productionTip = false;

Vue.use(validationPlugin);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
