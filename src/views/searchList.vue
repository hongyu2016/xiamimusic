<template>
  <!--搜索列表-->
  <div class="search-box">
      <div class="search-head">
        <mu-text-field hintText="请输入歌曲或歌手" @keyup.enter="searchMusic" v-model.trim="searchTxt" class="search-input"/>
        <!--<mu-icon value="search" :size="30" color="#5d5d5d" class="search-btn" @click.stop="searchMusic"/>-->
          <span class="icon-search search-btn"></span>
      </div>
      <div class="search-list">
          <mu-list>
              <template v-for="(item,index) in songList">
                  <mu-list-item :title="item.songname" @click="playMuisc(index)">
                      <mu-avatar :src="item.albumpic_big" slot="leftAvatar"/>
                      <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .87)">by： -</span> {{item.singername}}
                  </span>

                  </mu-list-item>
                  <mu-divider inset/>
              </template>

              <mu-infinite-scroll :loading="loading" @load="loadMore"/>
              <div v-show="noMore" style="text-align: center;padding: 5px 0;width: 100%">没有更多内容了</div>
          </mu-list>
      </div>
  </div>
</template>

<script>
    import api from '../api/index'
    import tools from '../../static/js/playTools'
    import {mapActions} from 'vuex'
export default {
  name: 'searchList',
  data () {
    return {
        loading: false,
        searchTxt:'',
        songList:[],
        isPush:true,
        allPages:0,
        nowPages:1,
        noMore:false
    }
  },
    computed:{

    },
    methods:{
        get(){
            //默认加载
            this.loading = true;
            const _this=this;
            this.nowPages = 1;
            this.allPages = 0;
            this.isPush = true;

            this.$http.get(api.search(this.searchTxt,this.nowPages)).then(function(res){
                _this.songList= res.data.showapi_res_body.pagebean.contentlist;
                _this.allPages = res.data.showapi_res_body.pagebean.allPages;
                _this.loading = false
            })
        },
        getLoadMore(){
            //滚动加载
           const _this=this;
           if(this.nowPages < this.allPages + 1){
               this.loading = true;
               this.nowPages++;
               this.$http.get(api.search(this.searchTxt,this.nowPages)).then(function(res){
                   _this.isPush = true;
                   //循环大数组
                   res.data.showapi_res_body.pagebean.contentlist.forEach((value)=>{
                       _this.songList.push(value);
                   });

                   _this.loading = false;
                   if(res.data.showapi_res_body.pagebean.contentlist.length<=0){
                       _this.noMore=true;//没有更多内容了
                   }
               });
           }else{
               _this.noMore=true;//没有更多内容了
           }
        },
        searchMusic(){
            if (this.searchTxt.length==0){
                //搜索框不能为空
                return false;
            }else {
                this.get();
            }
        },
        loadMore(){
            this.getLoadMore();
        },
        //播放
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
    created(){

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
  .search-box{padding: 0 0.3rem;position: relative}
  .search-head{position: relative}
  .search-input{width: 85%}
  .search-btn{position: absolute;right:0;font-size: 0.8rem;margin-top: 0.2rem;color: #868686}
</style>
