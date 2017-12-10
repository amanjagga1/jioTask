<template>
  <div class= "container">
    <app-headers></app-headers>
    <br>
    <router-view></router-view>
    <!--<router-view :languages="languages"></router-view>
    <app-home :languages="languages"></app-home>-->
  </div>
</template>

<script>
import Header from './Header.vue';
import Home from './Home.vue';
import VueRouter from 'vue-router';
export default {
  components: {
    'appHeaders': Header,
    'appHome': Home
  }
}
</script>

<style lang="scss">
    @import '../node_modules/bulma/css/bulma.css';
</style>

