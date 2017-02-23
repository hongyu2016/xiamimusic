<template>
  <!--首页-->
  <div class="gridlist-container">
    <mu-grid-list class="gridlist">

        <mu-grid-tile v-for="item in list">
          <img src="https://museui.github.io/img/breakfast.f109829.jpg"/>
          <span slot="title">歌曲标题</span>
          <span slot="subTitle">by <b>歌手名称</b></span>
          <!--<mu-icon-button icon="star_border" slot="action"/>-->
        </mu-grid-tile>

      <mu-infinite-scroll  :loading="loading" @load="loadMore"/>

    </mu-grid-list>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {

      return {
          list:[],
          num: 20,
          loading: false,
          scroller: null
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
            setTimeout(() => {
                for (let i = this.num; i < this.num + 10; i++) {
                    this.list.push('item' + (i + 1))
                }
                this.num += 10
                this.loading = false
            }, 2000)
        },
        loadMore () {

           this.get()
        }
    }
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
