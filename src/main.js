import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Article from './Article.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/article/:id', component: Article },
    { path: '/', component: Home }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
