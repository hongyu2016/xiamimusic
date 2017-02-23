<template>
  <!--榜单分类列表-->
  <div>
      <mu-list>
        <router-link v-for="titleText in titleTexts" :to="{name:'aliDetailList',params:{type:2,song_type:titleText.song_type}}">

          <mu-list-item v-bind:title="titleText.title">
            <mu-icon slot="right" value="arrow_right"/>
          </mu-list-item>

        </router-link>
      </mu-list>
  </div>
</template>

<script>

export default {
  name: 'aliBangList',
  data () {
      const aliBang=[
          {song_type:'real-time',title:'实时排行榜'},
          {song_type:'week',title:'周榜'},
          {song_type:'yaer',title:'年榜'}
      ];
    return {
        aliBang:aliBang,
        titleTexts:[]
    }
  },
    watch:{
      //路由切换时进行判断
      '$route'(to,from){
          if(to.name=='aliBangList'){
              this.titleTexts=this.aliBang;
          }
      }
    },
    mounted(){
      //页面初始化判断路由
      if(this.$route.name=='aliBangList'){
          this.titleTexts=this.aliBang;
      }
      console.log(this.$route.name)

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
