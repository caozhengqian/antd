import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from 'ant-design-vue'; //引入组件，但不用引入样式

Vue.component(Button.name, Button); //注册
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
