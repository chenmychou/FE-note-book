<template>
  <div class="detail_pages">
    <div class="find_word_feild" v-if="tabIndex === 1">
      <input class="word_search" type="text" placeholder="输入词语" v-model="searchContent"><button class="word_btn" @click="getListData">马上找找</button>
    </div>
    <div class="find_word_feild" v-if="tabIndex === 2">
      <input class="word_search" type="text" placeholder="输入成语" v-model="searchContent"><button class="word_btn" @click="getListData">马上找找</button>
    </div>
    <div class="find_word_feild" v-if="tabIndex === 3">
      <input class="word_search" type="text" placeholder="输入歇后语" v-model="searchContent"><button class="word_btn" @click="getListData">马上找找</button>
    </div>
    <div v-if="tabIndex === 1" class="list_data_view">
     <div class="list_item" v-for="item in dataList" :key="item.ci">
       <div class="_item_data">{{item.ci}}</div>
       <div class="_item_explanation">{{item.explanation}}</div>
     </div>
    </div>
    <div v-if="tabIndex === 2" class="list_data_view">
     <div class="list_item" v-for="item in dataList" :key="item.ci">
       <div class="_item_data">{{item.word}}</div>
       <div class="_item_explanation">拼音：{{item.pinyin}}</div>
       <div class="_item_explanation">释义：{{item.explanation}}</div>
       <div class="_item_explanation">出自：{{item.derivation}}</div>
       <div class="_item_explanation">首字母：{{item.abbreviation}}</div>
       <div class="_item_explanation">例句：{{item.example}}</div>
     </div>
    </div>
    <div v-if="tabIndex === 3" class="list_data_view">
     <div class="list_item" v-for="item in dataList" :key="item.ci">
       <div class="_item_data">{{item.riddle}}</div>
       <div class="_item_explanation">{{item.answer}}</div>
     </div>
    </div>
    <div class="no_data" v-if="dataList.length === 0">
      暂无数据
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchContent: '',
      dataList: [],
      tabIndex: 1,
      ciyuUrl: 'https://api.zouzhengming.com/api/v1/checkCiYu/find?ciYu=',
      xiehouyuUrl: 'https://api.zouzhengming.com/api/v1/checkxiehouyu/find?riddle=',
      chengyuUrl: 'https://api.zouzhengming.com/api/v1/checkIdiom/find?word='
    }
  },

  components: {
  },

  methods: {
    getListData () {
      let that = this
      let id = Number(this.$mp.query.id)
      this.tabIndex = id
      let curUrl = ''
      if (id === 1) {
        curUrl = this.ciyuUrl
      }
      if (id === 2) {
        curUrl = this.chengyuUrl
      }
      if (id === 3) {
        curUrl = this.xiehouyuUrl
      }
      let word = encodeURIComponent(this.searchContent)
      my.request({
        url: curUrl + word,
        method: 'get',
        dataType: 'json',
        headers: {'content-type': 'application/json'},
        success: function (res) {
          that.dataList = res.data.data
          // my.alert({content: 'success'})
        },
        fail: function (res) {
          my.showToast({
            content: '服务器异常，请稍后重试',
            type: 'fail',
            duration: 2000
          })
        },
        complete: function (res) {
          // console.log('completesres===>>>>', res)
          my.hideLoading()
          // my.alert({content: 'complete'})
        }
      })
    }
  },
  onLoad () {
    Object.assign(this.$data, this.$options.data())
    let id = Number(this.$mp.query.id)
    this.tabIndex = id
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
    width: 60%;
    border: 1px solid #999;
    border-radius: 6px;
    opacity: 0.8;
    height: 30px;
    line-height: 30px;
  }
  .word_btn{
    width: 100px;
    margin-left: 10px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #999;
    border-radius: 6px;
    opacity: 0.8;
    background:-webkit-linear-gradient(left,rgb(93, 51, 51),rgb(161, 161, 12),rgb(23, 0, 128));
  }
  .list_data_view{
    margin-top: 20px;
  }
  .list_item {
    padding: 14px 16px;
    font-size: 18px;
    color: #333;
    line-height: 24px;
    border: 1px solid #ccc;
  }
  ._item_explanation {
    font-size: 14px;
    color: #000;
  }
  .no_data{
    padding: 14px 16px;
    font-size: 18px;
    color: #333;
    line-height: 24px;
  }
</style>
