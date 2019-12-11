import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './route/route.js'
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)

})
