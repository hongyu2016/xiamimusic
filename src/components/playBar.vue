<template>
    <!--返回顶部-->
    <div id="play-bar" @click='' v-show="isDisplay">
        <mu-row gutter>
            <mu-col width="20" tablet="30" desktop="30">
                <img class="play-ing-pic" src="http://i.gtimg.cn/music/photo/mid_album_300/f/z/003Wm3qI0ik5fz.jpg"/>
            </mu-col>
            <mu-col width="60" tablet="50" desktop="50">
                <p class="sing-name">夏夜星空海 (《那片星空那片海》电视剧主题曲)</p>
                <p class="sing-singer">夏夜星空海</p>
            </mu-col>
            <mu-col width="20" tablet="20" desktop="20">
                <div>
                    <span class="play-bar-icon icon-play" style="display: none"></span>
                    <span class="play-bar-icon icon-pause" ></span>
                    <span class="play-bar-icon icon-step-forward"></span>
                </div>
            </mu-col>
        </mu-row>
    </div>
</template>
<script>
    export default{
        name:'gotoTop',
        methods:{

        }
    }
</script>
<style scoped>
    #play-bar{position: fixed;right: 0;bottom: 0;z-index: 10;background-color: rgba(0,0,0,.75);
        padding: 5px;width: 100%;height: 60px;display: block;
        color: #fff;box-sizing: border-box;
    }
    .play-ing-pic{width: 100%;border: solid 1px #9f9f9f;padding: 1px}
    .sing-name{width: 100%;display: block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;margin-top: 3px;margin-bottom: 5px;}
    .sing-singer{margin-top: 5px;color: #ccc;margin-bottom: 0}
    .play-bar-icon{font-size: 18px;line-height: 50px;}
    .icon-play,.icon-pause{margin-right: 5px;}
</style>