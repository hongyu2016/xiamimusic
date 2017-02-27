<template>
  <div id="app">
    <subMenu></subMenu>
    <div class="main">
      <router-view></router-view>
    </div>
    <gotoTop v-show="showTop"></gotoTop>
  </div>
</template>

<script>
  import subMenu from 'components/subMenu.vue';
  import gotoTop from 'components/gotoTop.vue'
export default {
  name: 'app',
    data(){
      return {
          showTop:false
      }
    },
    methods:{
        needToTop(){
            let curHeight = document.documentElement.scrollTop || document.body.scrollTop;  //滚动高度
            let viewHeight = document.documentElement.clientHeight;
            if (curHeight > viewHeight + 500) {
                this.showTop = true;
            }
            else {
                this.showTop = false;
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.needToTop);  //滚动事件监听
    },
    components:{subMenu,gotoTop}
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
