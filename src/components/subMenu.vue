<template>
  <!--顶部菜单-->
  <nav class="menu">
    <div class="sub-menu">
      <router-link :to="{name:'index'}">
        <mu-flat-button label="推荐" />

      </router-link>
      <router-link :to="{name:'bangList'}">
        <mu-flat-button label="排行榜" />

      </router-link>
      <router-link :to="{name:'searchList'}">
        <mu-flat-button label="搜索"  secondary/>

      </router-link>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'subMenu',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu{width: 100%;position: relative;margin-bottom: 10px}
  .sub-menu{
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
  }
  .sub-menu{background-color: #eaeaea}
  .sub-menu .sub-menu-link {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    display: block;
  }
</style>
