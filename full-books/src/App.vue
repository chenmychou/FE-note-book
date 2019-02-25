<template>
  <div id="app">
<<<<<<< HEAD
    <div style="margin: 50px 10px">
      <van-cell-group>
        <van-field
          v-model="ciYu"
          clearable
          label="汉字:"
          placeholder="请输入需要查找的汉字"
        />
        <van-field
          v-model="xiehouyu"
          clearable
          label="歇后语:"
          placeholder="请输入需要查找的歇后语"
        />
        <van-field
          v-model="word"
          clearable
          label="词语:"
          placeholder="请输入需要查找的词语"
        />
        <van-field
          v-model="idiom"
          clearable
          label="成语:"
          placeholder="请输入需要查找的成语"
        />
      </van-cell-group>
    </div>
    <div style="display:flex;justify-content: center">
      <van-button style="width:80%" type="primary" size="large">搜索</van-button>
    </div>
=======
    <div>
      <div class="app_index">
        <div class="new_title">
          title
        </div>
        <div v-for="item in list" :key="item.relName" :class="{common_css: common_css,coverPic: coverPic}" @click="findWords()">
          <div class="_title">
            123
          </div>
        </div>
      </div>
  </div>
>>>>>>> 9ba0acc62e35b704052319b7886086050dc2292b
  </div>
</template>

<script>
// import Vue from 'vue';
// import axios from 'axios'
// import {Button, Field, Cell, CellGroup} from 'vant';
// Vue.use(Button).use(Field).use(Cell).use(CellGroup)
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      common_css: "common_css",
      list: [
        {relName: '123', iconIndex: "cover_pic_1", link: "chengyu"},
        {relName: '1234', iconIndex: "cover_pic_2", link: "xiehouyu"},
        {relName: '12341', iconIndex: "cover_pic_3", link: "ciyu"}
      ]
    }
  },
  created() {
  },
  methods: {
    findWords () {

    }
  },
  computed: {
    coverPic: function () {
      return this.list.map(item => item.iconIndex)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/app.scss';
</style>

