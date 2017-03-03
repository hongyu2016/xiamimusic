<template>
  <!--榜单详情列表-->
  <div class="list">
    <mu-circular-progress :size="30" v-show="loading"/>
    <mu-list>

      <template v-for="(item,index) in songList">
        <mu-list-item :title="item.songname" @click="playMuisc(index)">
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
      </template>


      <!--<mu-infinite-scroll  :loading="loading" @load="loadMore"/>-->

    </mu-list>
  </div>


</template>

<script>
  import api from '../api/index'
  import tools from '../../static/js/playTools'
  import {mapActions} from 'vuex'
  /*import loading from '../components/loading.vue'*/
export default {
  name: 'hello',
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
   /* activated(){

        this.get()  //如果不写的话，就会读取内存只能够的。钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated
    },*/
    mounted () {

    },

    /*// 解除keep-alive的缓存
    beforeRouteEnter: (to, from, next) => {
        next(vm => {
            // 判断过来的路由是否带有对应的参数信息
            if (to.params.topid) {
                // 获取songList传入的数据

            }
        })
    },
    // 路由离开时
    beforeRouteLeave: (to, from, next) => {
        if (from.params.topid) {
            // 获取songList传入的数据
            console.log('离开了')
        }
        next()
    },*/
    methods: {
        get(){
            let _this=this;
            this.loading = true
            this.$http.get(api.getPlayListByWhere(this.$route.params.topid,0)).then((res) => {
                if(res.data.showapi_res_code==0){
                    _this.songList= res.data.showapi_res_body.pagebean.songlist;
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
        ...mapActions({
            setSongiList:'SONG_LIST_ACTION'
        })
    },
   /* components:{loading}*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list .mu-circular-progress{
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
  }
</style>
