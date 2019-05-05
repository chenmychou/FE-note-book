<template>
  <div id="mainIndex">
        <div class="app_index">
          <div class="new_title">
            新时代大辞海
          </div>
          <div class="common_css cover_pic_1" @click="findWords(1)">
            <div class="_title">
              成语查找
            </div>
          </div>
          <div class="common_css cover_pic_2" @click="findWords(2)">
            <div class="_title">
              歇后语
            </div>
          </div>
          <div class="common_css cover_pic_3" @click="findWords(3)">
            <div class="_title">
              词语
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'mainIndex',
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
    findWords (index) {
      this.$router.push({name: 'list', query: {id: index}})
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/app.scss';
</style>

