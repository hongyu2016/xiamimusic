<template>
  <!--顶部菜单-->
  <nav class="menu">
    <div class="sub-menu">
      <div class="sub-menu-link">
        <router-link :to="{name:'index'}" tag="div">
          <mu-flat-button label="推荐"/>

        </router-link>
      </div>
      <div class="sub-menu-link">
        <router-link :to="{name:'bangList'}" tag="div">
          <mu-flat-button label="热门榜单"/>

        </router-link>
      </div>
      <!--<div class="sub-menu-link">
        <router-link :to="{name:'aliBangList'}" tag="div">
          <mu-flat-button label="阿里榜单" />

        </router-link>
      </div>-->
      <div class="sub-menu-link">
        <router-link :to="{name:'searchList'}" tag="div">
          <mu-flat-button label="搜索"/>

        </router-link>
      </div>

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
<style lang="scss" scoped>
  @import '../assets/scss/mixin/mixin.scss';/*引入scss混合宏*/
  .menu{width: 100%;position: fixed;top:0;margin-bottom: 0;z-index: 10}
  .sub-menu{
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
  }
  .sub-menu{background-color: #eaeaea;height: 1.5rem;line-height: 1.5rem}
  .sub-menu .sub-menu-link {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    display: block;
    text-align: center;
  }
</style>
