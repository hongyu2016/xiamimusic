<template>
  <!--搜索列表-->
  <div class="search-box">
      <div class="search-head">
        <mu-text-field hintText="请输入歌曲或歌手"/>
        <mu-icon value="search" :size="30" color="#5d5d5d" class="search-btn"/>
      </div>
      <div class="search-list">

      </div>
  </div>
</template>

<script>
export default {
  name: 'searchList',
  data () {
    return {

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
  .search-box{padding: 0 16px;margin-top: -10px;position: relative}
  .search-head{position: relative}
  .search-btn{position: absolute;right:0;top:5px}
</style>
