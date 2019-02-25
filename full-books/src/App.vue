<template>
  <div id="app">
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

