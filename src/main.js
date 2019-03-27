import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Comp1 from './components/component1.vue'
import Comp2 from './components/component2.vue'
import Comp3 from './components/component3.vue'

const routes = [
  { path: '/component1', component: Comp1 },
  { path: '/component2', component: Comp2 },
  { path: '/component3', component: Comp3 }
];
const router = new VueRouter({
  routes 
})

Vue.use(VueRouter)
new Vue({
  router,			
  el: '#app',
  render: h => h(App)
})
