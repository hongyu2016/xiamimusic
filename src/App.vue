<template>
  <div id="app">
    <subMenu></subMenu>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import subMenu from 'components/subMenu.vue';
export default {
  name: 'app',
    components:{subMenu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
}
.my-active .mu-flat-button-label{color: #ff4081;}
</style>
