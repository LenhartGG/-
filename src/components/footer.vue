<template>
<div class="footernav">
    <div class="footer">
        <div class="auto">
            <div class="footer-logo">
                <img src="../assets/img/logo02.png" alt="">
            </div>
            <div class="footer-ul">
                <li class="w125">
                    关于公拍网 <br>
                    <a href="">•公拍网 </a>
                    <a href="">•上海公拍中心 </a>
                    <a href="">•公拍大事记 </a>
                    <a href="">•诚聘英才 </a>
                    <a href="">•联系我们</a>
                </li>
                <li class="w125">竞买帮助 <br>
                    <a href="">•什么是同步拍卖</a>
                    <a href="">•什么是在线拍卖 </a>
                    <a href="">•如何参加司法拍卖 </a>
                    <a href="">•什么是保留价 </a>
                    <a href="">•如何设置代理出价</a>
                </li>
                <li class="w350">
                    拍卖课堂 <br>
                    <a href="">•中华人民共和国拍卖法  </a>
                    <a href="">•人民法院民事执行中拍卖、变卖财产的规定 </a>
                    <a href="">•拍卖监督管理办法 </a>
                    <a href="">•中华人民共和国企业国有资产法</a>
                    <a href="">•拍卖师执业资格制度暂行规定</a>
                </li>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'footernav',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        clear: both;
        width: 100%;
        min-width: 1200px;
        float: left;
        padding: 24px 0;
        background: #363940;
        clear: both;
        margin-top: 25px;
    }
    .auto {
        width: 1200px;
        margin: 0 auto;
    }
    .footer .footer-logo {
        width: 210px;
        float: left;
        margin-top: 25px;
    }
    .footer-ul {
        width: 850px;
        float: left;
    }
    .footer-ul li {
        float: left;
        line-height: 20px;
        color: #FFF;
        font-size: 12px;
        margin-left: 70px;
    }
    .footer-ul li a:hover {
        color: #d80d19;
    }
    .w125 {
        width: 125px;
    }
    .w350 {
        width: 350px;
    }
    .footer-ul li a {
        width: 100%;
        float: left;
        display: block;
        font-size: 12px;
        color: #FFF;
    }
</style>
