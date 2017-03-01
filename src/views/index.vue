<template>
  <!--首页-->
  <div class="gridlist-container">
    <!--<loading v-show="loading"></loading>-->
    <mu-circular-progress :size="30" v-show="loading"/>
    <mu-grid-list class="gridlist">

        <mu-grid-tile v-for="(item,index) in songList">
            <img :src="item.albumpic_big" @click="playMuisc(index)"/>
            <span slot="title"  @click="playMuisc(index)">{{item.songname}}</span>
            <span slot="subTitle"  @click="playMuisc(index)">by： <b>{{item.singername}}</b></span>
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
                _this.songList= res.data.showapi_res_body.pagebean.songlist;
                _this.loading = false
            })
        },
        playMuisc (index) {
            if(this.isPush){
                this.setSongiList(this.songList);
                this.isPush = false;
            };
            tools.playMusic(index);
        },
        ...mapActions({
            setSongiList:'SONG_LIST_ACTION'
        })
    },
    /*components:{loading}*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/scss/mixin/mixin.scss';/*引入scss混合宏*/
  .gridlist-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  @include font-dpr(14px);
  }
    .mu-grid-tile>img{
        /*height: auto;
        width: 100%;*/
    }
  .gridlist{
    width: 100%;
    /*height: 450px;*/
    overflow-y: auto;
    align-content: flex-start; /*换行后 垂直排列方式*/
  }
</style>
