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
    #goto-top{
        position: fixed;
        right: 10px;
        bottom: 2.3rem;
        z-index: 10;
        background-color: #cc8e06;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        display: block;
        color: #fff;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.5rem;
        line-height: 1rem;
    }
</style>