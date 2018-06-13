<template>
<div class="details-con">
    <div class="tab-list">
        <ul class="clearfix">
            <li class="cur"><a href="#menuid1">竞买公告</a></li>
            <li class=""><a href="#menuid2">竞买须知</a></li>
            <li class=""><a href="#menuid3">标的物介绍</a></li>
            <li class=""><a href="#menuid4">竞买记录 （<span class="red" id="html_Bid_Shu">19</span>）</a></li>
        </ul>
    </div>
</div>
</template>

<style lang="less">
.details-con {
    .tab-list {
        border: 1px solid #ddd;
        background: #f6f6f6;
        height: 64px;
        li{
            float: left;
            font-size: 18px;
            padding: 20px 0;
            position: relative;
            border-top: 2px solid #f6f6f6;
            a{
                display: inline-block;
                padding: 0 45px;
                border-left: 1px solid #ddd;
                margin-left: -2px;
            }
        }
        li.cur {
            border-top: 2px solid #d80e19;
            background: #fff;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            left: -1px;
            top: -1px;
            a {
                color: #d80e19;
                border-left: none;
            }
        }
    }

}
</style>
