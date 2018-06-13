<template>
<div class="recordMsg">
    <div class="bottom">
    Copyright © 2010-2016 上海市拍卖行业协会 版权所有 
    <a href="http://www.miibeian.gov.cn">沪ICP备11015601-3</a> <br>
    地址：上海市黄浦区乔家路2号 邮编：200010 电话：400-820-3720
    传真：021-64226596 邮箱：webmaster@gpai.net
    <div style="width:300px;margin:0 auto; ">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010102002574" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <img src="../assets/img/beian.png" style="float:left;" title="10.0.0.1"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">沪公网安备 31010102002574号</p></a>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'recordMsg',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bottom {
        width: 100%;
        float: left;
        text-align: center;
        font-size: 12px;
        padding: 18px 0;
        line-height: 23px;
    }
</style>
