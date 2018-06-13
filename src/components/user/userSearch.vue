<template>
    <div class="nav2 clearfloat">
        <div class="w">
            <div class="nav2-logo">
            <a href="/sf/"><img src="../../assets/img/logo02.png" alt="" width="185"></a>
            </div>
            <div class="nav2-search"><form method="post" action="/sf/search.do">
                <input type="text" placeholder="小区名称/房产座落" class="so-int">
                <button class="so-btn"></button></form>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.nav2 {
    width: 100%;
    background: #d80d19;
    padding: 25px 0;
    min-width: 1200px;
    .w {
        width: 1200px;
        margin: 0 auto;
        .nav2-logo {
            float: left;
            width: 185px;
        }
        .nav2-search {
            width: 570px;
            float: right;
            height: 40px;
            background: #FFF;
            margin-top: 5px;
            .so-int {
                width: 498px;
                height: 36px;
                line-height: 36px;
                border: 0;
                outline: 0;
                text-indent: 13px;
                margin-top: 2px;
                color: #929191;
                font-size: 14px;
            }
            .so-btn {
                width: 60px;
                height: 38px;
                line-height: 38px;
                background: #363940 url(../../assets/img/so_btn.png) no-repeat center;
                float: right;
                border: 0;
                margin-top: 1px;
                margin-right: 1px;
                cursor: pointer;
            }
        }
    }
}
</style>

