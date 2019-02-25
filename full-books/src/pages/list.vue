<template>
  <div id="app">
    <div style="margin: 50px 10px">
      <van-cell-group>
        <!-- <van-field
          v-model="ciYu"
          required
          clearable
          label="汉字："
          placeholder="请输入需要查找的汉字"
        /> -->
        <van-field
          v-if="queryName == 2"
          v-model="xiehouyu"
          label="歇后语"
          placeholder="请输入需要查找的歇后语"
          required
        />
        <van-field
          v-if="queryName == 3"
          v-model="word"
          label="词语"
          placeholder="请输入需要查找的词语"
          required
        />
        <van-field
          v-if="queryName == 1"
          v-model="idiom"
          label="成语"
          placeholder="请输入需要查找的成语"
          required
        />
      </van-cell-group>
    </div>
    <div style="display:flex;justify-content: center">
      <van-button style="width:80%" type="primary" size="large">搜索</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios'
import {Button, Field, Cell, CellGroup} from 'vant';
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
      queryName: 1,
      dataList: []
      // nameMap: {
      //   1: 'chengyu',
      //   2: 'xiehouyu',
      //   3: 'ciyu'
      // }
    }
  },
  created() {
    this.queryName = this.$route.query
    console.log('', this.queryName)
    this.initData()
  },
  methods: {
    async initData () {
      let data = await axios.get('/api/v1/checkIdiom/find?word=我')
      this.dataList = data.data.data
    }
  }
}
</script>

<style>

</style>
