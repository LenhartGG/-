<template>
  <div class="in-cont1 clearfloat">
        <div class="in-flash clearfloat">
          <div id="playBox">
            <ul class="oUlplay">
              <swiper></swiper>
            </ul>
          </div>
        </div>
        <div class="in-pay clearfloat">
          <div class="in-pay-items clearfloat">
            <li><a href="#"><img src="../../assets/img/in_ico1.jpg"></a><br>资金统一监管</li>
            <li><a href="#"><img src="../../assets/img/in_ico2.jpg"></a><br>在线支付</li>
            <li><a href="#"><img src="../../assets/img/in_ico3.jpg"></a><br>PC手机多平台</li>
          </div>
          <div class="hotline"><img src="../../assets/img/in_ico5.png">客服热线:400-820-3720</div>
          <div class="cooperation">
            <h3>合作机构</h3>
            <li><a href="#"><img src="../../assets/img/in_hz1.jpg"></a></li>
            <li><a href="#"><img src="../../assets/img/in_hz2.jpg"></a></li>
            <li><a href="#"><img src="../../assets/img/in_hz3.jpg"></a></li>
          </div>
        </div>
      </div>
</template>
<script>
import swiper from '../swiper'
export default {
  data:{
  },
  components: {
    swiper
  }
}
</script>

<style>
/* in-cont1 start */
.in-cont1{
  width: 100%;
}
.in-cont1 .in-flash{
  width: 923px;
  height: 350px;
  float: left;
}
.in-cont1 .in-pay{
  width: 276px;
  height: 320px;
  float: left;
  background: #f0f0f0;
  padding-top: 30px;
  border-right: 1px solid #d2d2d2;
}
.in-cont1 .in-pay .in-pay-items li{
  float: left;
  width: 75px;
  margin-left: 15px;
  font-size: 12px;
  text-align: center;
}
.in-cont1 .in-pay .in-pay-items li img {
  margin-bottom: 8px;
}
.in-cont1 .in-pay .hotline {
    width: 100%;
    float: left;
    border: 1px solid #d2d2d2;
    border-left: 0;
    border-right: 0;
    margin: 22px 0 16px 0;
    padding: 25px 0;
    font-size: 16px;
    font-weight: bold;
    color: #363940;
}
.in-cont1 .in-pay .hotline img{
  margin-top: -7px;
  float: left;
  margin-left: 24px;
  margin-right: 8px;
}
.in-cont1 .in-pay .cooperation{
  float: left;
  border-bottom: 1px solid #d2d2d2;
}
.in-cont1 .in-pay .cooperation h3{
  width: 100px;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  height: 26px;
  line-height: 26px;
  margin-top: 12px;
  margin-bottom: 5px;
  color: #363940;
}
.in-cont1 .in-pay .cooperation li{
  float: left;
  width: 123px;
  margin-left: 15px;
}
/* in-cont1 end */
</style>

