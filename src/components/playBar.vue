<template>
    <!--返回顶部-->
    <div id="play-bar" @click='' v-show="isDisplay">
        <mu-row>
            <mu-col width="20" tablet="30" desktop="30">
                <img class="play-ing-pic" :src="playerInfo.singerPic"/>
            </mu-col>
            <mu-col width="60" tablet="50" desktop="50" class="center-box">
                <p class="sing-name">{{playerInfo.singName}}</p>
                <p class="sing-singer">{{playerInfo.singerName}}</p>
                <!--进度条-->
                <mu-linear-progress mode="determinate" :value="100" id="small-progress" style="display: none" color="#ff4081"/>
            </mu-col>
            <mu-col width="20" tablet="20" desktop="20">
                <div style="text-align: center">
                    <span class="play-bar-icon" :class="getPlayBtnState" @click="playType"></span>
                    <span class="play-bar-icon icon-step-forward" @click="nextPlay"></span>
                </div>
            </mu-col>
            <audio src="" id="audio"></audio>
        </mu-row>
    </div>
</template>
<script>
    import tools from '../../static/js/playTools'
    import {mapGetters} from 'vuex'
    export default{
        name:'gotoTop',
        computed:{
            ...mapGetters({
                playerInfo:'GET_PLAYER_INFO', //面板信息
                isDisplay:'GET_PLAYER_ISDISPLAY', //是否显示
                isPlay:'GET_PLAYER_PLAYSTATE' //是否在播放
            }),
            getPlayBtnState(){
                return this.isPlay?'icon-pause':'icon-play';
            }
        },
        data(){
            return {

            }
        },
        methods:{
            playType (){
                tools.playState();
            },
            nextPlay (){
                tools.nextPlay();
            }
        },
        mounted(){
            tools.isEnded();
        }
    }
</script>
<style scoped lang="scss">
    @import '../assets/scss/mixin/mixin.scss';  /*引入scss混合宏*/
    #play-bar{position: fixed;right: 0;bottom: 0;z-index: 10;background-color: rgba(0,0,0,.75);
        padding: 5px;width: 100%;/*height: 60px;*/display: block;
        color: #fff;box-sizing: border-box;
    }
    .play-ing-pic{display:block;width: 100%;border: solid 1px #9f9f9f;padding: 1px}
    .sing-name{width: 100%;display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 3px;margin-bottom: 5px;font-size: 0.5rem}
    .sing-singer{margin-top: 5px;color: #ccc;margin-bottom: 5px;font-size: 0.3rem}
    .play-bar-icon{
    /*@include font-dpr(20px);*/
        line-height: 50px;
        font-size: 0.7rem;
    }
    .icon-play,.icon-pause{margin-right: 0.35rem;}
    .row,.col{position: relative;}
    #small-progress{position: absolute;left: 5px;bottom: -5px}
    .center-box{padding: 0 5px}
</style>