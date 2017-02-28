<template>
  <!--榜单详情列表-->
  <div class="list">
    <mu-circular-progress :size="30" v-show="loading"/>
    <mu-list>

      <mu-list-item :title="item.singername" v-for="item in songList">
        <mu-avatar :src="item.albumpic_big" slot="leftAvatar"/>
        <span slot="describe">
        <span style="color: rgba(0, 0, 0, .87)">by： -</span> {{item.singername}}
      </span>
        <!--<mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="专辑" />
          <mu-menu-item title="标记" />
        </mu-icon-menu>-->
      </mu-list-item>
      <mu-divider inset/>

      <!--<mu-infinite-scroll  :loading="loading" @load="loadMore"/>-->

    </mu-list>
  </div>


</template>

<script>
  import api from '../api/index'
  /*import loading from '../components/loading.vue'*/
export default {
  name: 'hello',
  data () {
      return {
          songList:[],
          loading: false,
      }
  },
    created () {
        this.get()
    },
    mounted () {

    },
    methods: {
        get(){
            const _this=this;
            this.loading = true
            this.$http.get(api.getPlayListByWhere(this.$route.params.topid,0)).then((res) => {
                _this.songList= res.data.showapi_res_body.pagebean.songlist;
                _this.loading = false
            })

        },
        /*loadMore () {

            this.get()
        }*/
    },
   /* components:{loading}*/
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
  .list .mu-circular-progress{
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
  }
</style>
