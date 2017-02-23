<template>
  <!--榜单分类列表-->
  <div>
      <mu-list>
        <router-link v-for="titleText in titleTexts" :to="{name:'xDetailList',params:{type:1,typeId:titleText.typeId}}">

          <mu-list-item v-bind:title="titleText.title">
            <mu-icon slot="right" value="arrow_right"/>
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
          {typeId:101,title:'虾米音乐榜'},
          {typeId:102,title:'虾米新歌榜'},
          {typeId:103,title:'虾米原创榜'},
          {typeId:104,title:'大虾推荐榜'},

          {typeId:1,title:'Hito中文榜'},
          {typeId:2,title:'香港劲歌金榜'},
          {typeId:3,title:'英国UK单曲榜'},
          {typeId:4,title:'Billboard单曲榜'},
          {typeId:5,title:'Oricon公信单曲榜'},
          {typeId:6,title:'M-net综合数据周榜'},
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
</style>
