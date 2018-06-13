<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiperSlide>
        <img src="../assets/img/20180511.png" alt="">
      </swiperSlide>
      <swiperSlide>
        <img src="../assets/img/20180511.png" alt="">
      </swiperSlide>
      <swiperSlide>
        <img src="../assets/img/20180511.png" alt="">
      </swiperSlide>
      <swiperSlide>
        <img src="../assets/img/20180511.png" alt="">
      </swiperSlide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
  
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000,//2秒切换一次
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "宋体", "微软雅黑";
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
  list-style: none;
}
ul, li, dl, dd, dt, p, ol, h1, h2, h3, h4, h5{
  font-size: 12px;
}
/*清除浮动代码*/ 
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0} 
.clearfloat{zoom:1} 

.red{
  color: #d80d19;
}
.gray{
  color: gray;
}
.w {
  margin: 0 auto;
  width: 1200px;
}
.sifa-bg {
  min-width: 1190px;
  height: 130px;
  background: url("../assets/img/top2.jpg") no-repeat center rgb(164, 10, 3);
}










</style>