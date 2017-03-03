<template>
  <!--首页-->
  <div class="gridlist-container">
      <!--<mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>--><!--上拉刷新-->
    <!--<loading v-show="loading"></loading>-->
    <mu-circular-progress :size="30" v-show="loading"/><!--loading-->
    <mu-grid-list class="gridlist">

        <mu-grid-tile v-for="(item,index) in songList">
            <img  @click="playMuisc(index)" v-lazy="item.albumpic_big"/>
            <span slot="title"  @click="playMuisc(index)" class="text-14">{{item.songname}}</span>
            <span slot="subTitle"  @click="playMuisc(index)" class="text-12">by： <b>{{item.singername}}</b></span>
            <!--<mu-icon-button icon="star_border" slot="action"/>-->
        </mu-grid-tile>

      <!--<mu-infinite-scroll  :loading="loading" @load="loadMore"/>-->

    </mu-grid-list>
  </div>
</template>

<script>
    import api from '../api/index'
    /*import loading from '../components/loading.vue'*/
    import tools from '../../static/js/playTools'
    import {mapActions} from 'vuex'
export default {
  name: 'index',
  data () {
      return {
          isPush:true,
          songList:[],
          loading: false,
          //refreshing: false,
          //trigger: null  //触发下拉刷新的元素, 会给它绑定上事件
      }
  },
    created () {
        this.get()
    },
    mounted () {

    },
    activated(){
        //this.trigger = this.$el  //触发下拉刷新的元素, 会给它绑定上事件
    },
    methods: {
        get(){
            this.loading = true
            const _this=this;

            this.$http.get(api.getPlayListByWhere(26,0)).then(function(res){
                if(res.data.showapi_res_code==0) {
                    _this.songList = res.data.showapi_res_body.pagebean.songlist;
                    _this.loading = false
                }
            })
        },
        playMuisc (index) {
            if(this.isPush){
                this.setSongiList(this.songList);
                this.isPush = false;
            }
            tools.playMusic(index);
        },
        //下拉刷新--体验不好-卡 滑动的时机也不对 先去掉此功能
       /* refresh(){
            this.refreshing = true
            //this.loading = true
            const _this=this;

            this.$http.get(api.getPlayListByWhere(26,0)).then(function(res){
                _this.songList= res.data.showapi_res_body.pagebean.songlist;
                //_this.loading = false
                _this.refreshing = false
            })
        },*/
        ...mapActions({
            setSongiList:'SONG_LIST_ACTION'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/scss/mixin/mixin.scss';/*引入scss混合宏*/
  .gridlist-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
    .mu-grid-tile>img{
        /*height: auto;
        width: 100%;*/
    }
    .list-padding .mu-grid-tile.multiline .mu-grid-tile-titlebar{height: auto;}
    .text-14{
    @include font-dpr(14px);
    }
    .text-12{
    @include font-dpr(12px);
    }
  .gridlist{
    width: 100%;
    /*height: 450px;*/
    overflow-y: auto;
    align-content: flex-start; /*换行后 垂直排列方式*/
  }
</style>
