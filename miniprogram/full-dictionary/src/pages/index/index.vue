<template>
  <div class="index_pages">
    <!-- <div class="chatu_box">
      <img class="chatu_image" src="../../../static/images/jianchi.jpg" alt="">
    </div> -->
    <div class="find_word_feild">
      <button class="word_search" @click="goToDetail()">开启词海之旅</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  components: {
  },

  methods: {
    goToDetail () {
      my.navigateTo({
        url: '../detail/main?id=1'
      })
    }
  },
  // onShow () {
  //   this.request.get('/api/v1/checkIdiom/find?word=2').then(res => {
  //     console.log('res===>>', res)
  //   })
  // },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
  .index_pages{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('../../../static/images/backgroundImage.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .chatu_box{
    
  }
  .chatu_image{
    width: 100px;
    height: 70px;
  }
  .find_word_feild{
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .word_search{
    width: 40%;
    height: 40px;
    line-height: 40px;
    color: rgb(56, 54, 52);
    font-weight: 900;
    border-radius: 20px;
    text-shadow: 5px 5px 5px rgb(56, 54, 52);
    box-shadow: 5px 5px 5px #D7BCA8;
    background:-webkit-linear-gradient(left,red,yellow,green);
  }
  
</style>
