<template>
  <div class="list_pages">
    <div class="nav_top">
      <div class="_icon_back" @click="back()">＜</div>
      <div class="_title">查询</div>
    </div>
    <div style="margin: 50px 10px">
      <van-cell-group>
        <van-field
          v-if="queryName === 2"
          v-model="xiehouyu"
          label="歇后语"
          clearable
          placeholder="请输入需要查找的歇后语"
        />
        <van-field
          v-if="queryName === 3"
          v-model="word"
          label="词语"
          clearable
          placeholder="请输入需要查找的词语"
        />
        <van-field
          v-if="queryName === 1"
          v-model="idiom"
          label="成语"
          clearable
          placeholder="请输入需要查找的成语"
        />
      </van-cell-group>
    </div>
    <div style="display:flex;justify-content: center">
      <van-button style="width:90%" type="primary" size="large" @click="search()">搜索</van-button>
    </div>
    <div class="list_container">
      <div class="list_content">
        有关{{curWord}}的内容如下：
      </div>
      <van-collapse v-if="queryName === 1" v-model="activeName" accordion>
        <van-collapse-item :title="item.word" :name="index + 1" v-for="(item, index) in dataList" :key="index">
          {{item.explanation}}
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-if="queryName === 2" v-model="activeName" accordion>
        <van-collapse-item :title="item.riddle" :name="index + 1" v-for="(item, index) in dataList" :key="index">
          {{item.answer}}
        </van-collapse-item>
      </van-collapse>
      <van-collapse v-if="queryName === 3" v-model="activeName" accordion>
        <van-collapse-item :title="item.ci" :name="index + 1" v-for="(item, index) in dataList" :key="index">
          {{item.explanation}}
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import {Button, Field, Cell, CellGroup, Collapse, CollapseItem} from 'vant';
Vue.use(Collapse).use(CollapseItem);
Vue.use(Button).use(Field).use(Cell).use(CellGroup)
export default {
  name: 'List',
  components: {
  },
  data() {
    return {
      ciYu: '',
      xiehouyu: '',
      word: '',
      idiom: '',
      activeName: 0,
      queryName: Number(this.$route.query.id),
      dataList: [],
      curWord: ""
    }
  },
  created() {
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    async search () {
      let queryName = this.queryName
      if (queryName === 1) { // 成语
        let word = this.idiom
        this.curWord = word
        let data = await axios.get('/api/v1/checkIdiom/find?word='+word)
        this.dataList = data.data.data
      }
      if (queryName === 3) { // 词语
        let word = this.word
        this.curWord = word
        let data = await axios.get('/api/v1/checkCiYu/find?ciYu='+word)
        this.dataList = data.data.data
      }
      if (queryName === 2) { // xiehouyu
        let xiehouyu = this.xiehouyu
        this.curWord = xiehouyu
        let data = await axios.get('/api/v1/checkxiehouyu/find?riddle='+xiehouyu)
        this.dataList = data.data.data
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/list.scss';
</style>

