<template>
  <!--顶部菜单-->
  <nav class="menu">
    <div class="sub-menu">

      <router-link :to="{name:'index'}" tag="div" class="sub-menu-link">
        <!--<mu-flat-button label="推荐" class="menu-text"/>-->
        <button type="button" class="menu-text">推荐</button>
      </router-link>

      <router-link :to="{name:'bangList'}" tag="div" class="sub-menu-link">
        <!--<mu-flat-button label="热门榜单" class="menu-text"/>-->
        <button type="button" class="menu-text">热门榜单</button>
      </router-link>

    <!--<div class="sub-menu-link">
      <router-link :to="{name:'aliBangList'}" tag="div">
        <mu-flat-button label="阿里榜单" />

      </router-link>
    </div>-->

      <router-link :to="{name:'searchList'}" tag="div" class="sub-menu-link">
        <!--<mu-flat-button label="搜索" class="menu-text"/>-->
        <button type="button" class="menu-text" style="border-right-color: transparent">搜索</button>
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
<style lang="scss" scoped>
  @import '../assets/scss/mixin/mixin.scss';/*引入scss混合宏*/
  .menu{width: 100%;position: fixed;top:0;left:0;margin-bottom: 0;z-index: 10}
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
    /*display: block;*/
    text-align: center;
  }
  .menu-text{@include font-dpr(16px);display: block;width: 100%;background-color: #fff;border: 1px solid #e6e5e5;border-top-color: transparent;border-left-color: transparent}

  .my-active .menu-text{color: red}
</style>
