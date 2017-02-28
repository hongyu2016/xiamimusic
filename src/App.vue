<template>
  <div id="app">
    <subMenu></subMenu>
    <div class="main" id="main" :class="setPadding_b">
      <router-view></router-view>
    </div>
    <playBar></playBar>
    <gotoTop v-show="showTop"></gotoTop>
  </div>
</template>

<script>
  import subMenu from 'components/subMenu.vue' //菜单按钮
  import gotoTop from 'components/gotoTop.vue' // 回到顶部
  import playBar from 'components/playBar.vue' //播放条
  //isDisplay
  import {mapGetters} from 'vuex'
export default {
  name: 'app',
    data(){
      return {
          showTop:false
      }
    },
    computed:{
        ...mapGetters({
            isDisplay:'GET_PLAYER_ISDISPLAY'
        }),
        setPadding_b(){
            return this.isDisplay?'padding-b':'no-padding-b';
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
    components:{subMenu,gotoTop,playBar}
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
.padding-b{padding-bottom: 65px;}
</style>
