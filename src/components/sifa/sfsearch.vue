<template>
    <!-- header start -->
    <div class="header">
        <div class="w">
            <div class="header-logo">
                <a href="#">
                    <img src="../../assets/img/sf_logo.jpg">
                </a>
            </div>
            <div class="header-search">
                <form action="" method="">
                    <input type="text" placeholder="输入拍品关键词" class="search-int">
                    <input type="submit" class="search-btn" value=" ">
                </form>
            </div>
            <a href="#" class="gaoji-seach">高级搜索</a>
            <div class="header-mphone">
                <img src="../../assets/img/xq_code.png">
                <br>
                手机逛公拍
            </div>
        </div>
    </div>
    <!-- header end -->
</template>

<style>
.w {
  margin: 0 auto;
  width: 1200px;
}
.header .w {
  height: 140px;
  position: relative;
}

.header .header-logo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 222px;
}

.header .header-search {
  position: absolute;
  top: 50%;
  transform: translateX(50%) translateY(-50%);
  width: 570px;
  height: 40px;
  line-height: 40px;
  background: #d80d19;
}
.header .header-search form .search-int {
  width: 508px;
  height: 34px;
  margin: 2px 0 0 2px;
  line-height: 36px;
  float: left;
  text-indent: 10px;
  outline: 0;
  color: #929191;
  border: 0;
}
.header .header-search form .search-btn {
  width: 40px;
  height: 37px;
  background: url("../../assets/img/sprites-img-s-3.png");
  background-position: 4px -1680px;
  border: 0;
  outline: 0;
}
.header .gaoji-seach {

  position: absolute;
  top: 50%;
  left: 68.5%;
  font-size: 12px;
  color: #929191;
  transform: translateX(80%) translateY(-50%);
}
.header .header-mphone {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateX(90%) translateY(-50%);
}
.header .header-mphone img {
  width: 75px;
  height: 75px;
}
</style>


