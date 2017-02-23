<template>
  <!--榜单详情列表-->
  <mu-list>


    <mu-list-item title="歌曲标题">
      <mu-avatar src="" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 歌曲名称
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="专辑" />
        <mu-menu-item title="标记" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
    <mu-list-item title="歌曲标题">
      <mu-avatar src="" slot="leftAvatar"/>
      <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 歌曲名称
      </span>
      <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
        <mu-menu-item title="专辑" />
        <mu-menu-item title="标记" />
      </mu-icon-menu>
    </mu-list-item>
    <mu-divider inset/>
      <mu-infinite-scroll  :loading="loading" @load="loadMore"/>


  </mu-list>

</template>

<script>
  import api from '../api/index'
export default {
  name: 'hello',
  data () {
      return {
          list:[],
          num: 20,
          loading: false,
          scroller: null
      }
  },
    created () {
        this.get()
    },
    mounted () {

    },
    methods: {
        get(){
            this.loading = true
            if(this.$route.params.type==1){
                //虾米
                this.$http.get(api.getPlayListByWhere(this.$route.params.typeId,0)).then((res) => {
                    /*var total = res.data.total
                    var list = (res.data.list)
                    for (let i = 0; i < list.length; i++) {
                        this.list.push(list[i])
                    }*/

                    //if (this.offset > total) this.offset = total
                    this.loading = false
                })
            }else{
                //阿里
            }



        },
        loadMore () {

            this.get()
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
