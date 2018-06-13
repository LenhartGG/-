<template>
  <div class="menu">
        <div class="w">
            <ul>
                <li><a href="#">公告</a></li>
                <li><a href="#">标的</a></li>
                <li><a href="#">法院自主拍卖</a>（<a href="#">变卖</a>）<i class="hot"></i></li>
                <li><a href="#">法院</a></li>
                <li><a href="#">机构</a></li>
                <li><a href="#">金融服务</a><i class="hot"></i></li>
                <li><a href="#">直播</a></li>
                <li><a href="#">帮助</a></li>
                <li><a href="#">法院入驻</a><i class="hot"></i></li>
            </ul>
        </div>
    </div>
</template>
<style>
/* menu start */
.menu {
  height: 34px;
  line-height: 34px;
  border-bottom: 2px solid #d80d19;
  min-width: 1200px;
}
.menu ul li {
  float: left;
  margin-left: 45px;
}
.menu ul li:nth-last-child(1) {
  float: right;
}
.menu ul li a {
  color: #000;
  font-size: 16px;
}
.menu ul li a:hover {
  color: #d80d19;
}
.menu ul li i.hot {
  float: right;
  width: 24px;
  height: 15px;
  background: url('../../assets/img/sprites-img-s-3.png');
  background-position: 0px -81px;
}
/* menu end */
</style>
