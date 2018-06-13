<template>
  <div class="list ">
    <sfbg></sfbg>
    <!-- 司法搜索 -->
    <Search></Search>
    <!-- 菜单 start -->
    <Menu></Menu>
    <!-- 菜单 end -->
    <!-- 参拍详情 -->
    <div class="w">
      <!-- 轮播图 start -->
      <Carousel></Carousel>
      <!-- 轮播图 end -->
      <!-- 拍卖流程 start -->
      <process></process>
      <!-- 拍卖流程 end -->
      <!-- 拍卖会 start -->
      <!-- <auctions></auctions> -->
      <!-- 拍卖会 end -->
      <!-- 法院自主拍卖 start -->
      <AutoAuction></AutoAuction>
      <!-- 法院自主拍卖 end -->
      <!-- 推荐 start -->
      <!-- <recommend></recommend> -->
      <!-- 推荐 end -->
      <!-- 监管部门 start -->
      <supervision></supervision>
      <!-- 监管部门 end -->
    </div>
  </div>
</template>

<script>
import sfbg from './sifa/sfbg.vue';
import Search from './sifa/sfsearch.vue';
import Menu from './sifa/Menu.vue';
import Carousel from './sifa/Carousel.vue';
import process from './sifa/process.vue';
import auctions from './sifa/auctions.vue';
import AutoAuction from './sifa/AutoAuction.vue';
import recommend from './sifa/recommend.vue';
import supervision from './sifa/supervision.vue';
export default {
  name: "list",
  data() {
    return {
      msg:''
    };
  },
  components:{
    sfbg,Search,Menu,Carousel,process,auctions,AutoAuction,recommend,supervision
  },
  created(){
  }
};
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