<template>
    <!--返回顶部-->
    <div id="goto-top" @click='goTop'>
        up
    </div>
</template>
<script>
    export default{
        name:'gotoTop',
        methods:{
            goTop(){
                document.body.scrollTop=0;
                document.documentElement.scrollTop=0;
            }
        }
    }
</script>
<style scoped>
    #goto-top{position: fixed;right: 10px;bottom: 65px;z-index: 10;background-color: #cc8e06;
        padding: 5px;border-radius: 50%;width: 30px;height: 30px;/*line-height: 15px;*/display: block;
        color: #fff;box-sizing: border-box;text-align: center;
    }
</style>