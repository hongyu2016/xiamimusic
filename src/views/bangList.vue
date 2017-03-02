<template>
  <!--榜单分类列表-->
  <div>
      <mu-list>
        <router-link v-for="titleText in titleTexts" :to="{name:'xDetailList',params:{type:1,topid:titleText.topid}}">

          <mu-list-item v-bind:title="titleText.title" titleClass="list-text">
            <!--<mu-icon slot="right" value="arrow_right"/>-->
              <span class="right-icon icon-angle-right"></span>
          </mu-list-item>

        </router-link>
      </mu-list>
  </div>
</template>

<script>

export default {
  name: 'bangList',
  data () {
      const xiamiBang=[
          {topid:3,title:'欧美'},
          {topid:5,title:'内地'},
          {topid:6,title:'港台'},
          {topid:16,title:'韩国'},

          {topid:17,title:'日本'},
          {topid:18,title:'民谣'},
          {topid:19,title:'摇滚'},
          {topid:23,title:'销量榜'},
      ];

    return {
        xiamiBang:xiamiBang,
        titleTexts:[]
    }
  },
    watch:{
      //路由切换时进行判断
      '$route'(to,from){
          if(to.name=='bangList'){
              this.titleTexts=this.xiamiBang;
          }
      }
    },
    mounted(){
      //页面初始化判断路由
      if(this.$route.name=='bangList'){
          this.titleTexts=this.xiamiBang;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
   .right-icon{position: absolute;right:16px;font-size: 20px;top: 14px}
</style>
