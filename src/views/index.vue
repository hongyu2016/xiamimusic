<template>
  <!--首页-->
  <div class="gridlist-container">
    <loading v-show="loading"></loading>
    <mu-grid-list class="gridlist" v-for="songList in list">
        <mu-grid-tile v-for="item in songList">

            <img :src="item.albumpic_big"/>
            <span slot="title">{{item.songname}}</span>
            <span slot="subTitle">by： <b>{{item.singername}}</b></span>
            <!--<mu-icon-button icon="star_border" slot="action"/>-->

        </mu-grid-tile>

      <!--<mu-infinite-scroll  :loading="loading" @load="loadMore"/>-->

    </mu-grid-list>
  </div>
</template>

<script>
    import api from '../api/index'
    import loading from '../components/loading.vue'
export default {
  name: 'index',
  data () {
      return {
          list:[],
          loading: false,
          //scroller: null
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
            const _this=this;

            this.$http.get(api.getPlayListByWhere(26,0)).then(function(res){
                _this.list.push( res.data.showapi_res_body.pagebean.songlist);
                console.log(_this.list)
                _this.loading = false
            })
        },
        /*loadMore () {

           this.get()
        }*/
    },
    components:{loading}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .gridlist-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .gridlist{
    width: 100%;
    /*height: 450px;*/
    overflow-y: auto;
    align-content: flex-start; /*换行后 垂直排列方式*/
  }
</style>
