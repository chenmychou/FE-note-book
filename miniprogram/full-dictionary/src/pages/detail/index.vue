<template>
  <div class="detail_pages">
    <div class="find_word_feild">
      <input class="word_search" type="text" placeholder="输入词语" v-model="searchContent">
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      searchContent: ''
    }
  },

  components: {
  },

  methods: {
    getListData () {
      let word = encodeURIComponent('我')
      this.request.get('/api/v1/checkIdiom/find?word=' + word).then(res => {
        console.log('res===>>', res)
      })
    }
  },
  onShow () {
    this.getListData()
  },
  created () {
  }
}
</script>

<style scoped>
  .detail_pages{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('../../../static/images/shuimo-detail.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .find_word_feild{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .word_search{
    width: 80%;
    border: 1px solid #999;
    border-radius: 6px;
    opacity: 0.8;
  }
</style>
