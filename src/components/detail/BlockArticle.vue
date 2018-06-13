<template>
    <div class="block-article" v-if="flag">
        <div class="step-title fl"><span>竞拍 流程</span></div>
        <ul class="step-list fl">
            <li>
                <i class="step01"></i><p><span>第一步</span><b>阅读公告</b></p>
                <div class="arrow-r"></div>
            </li>
            <li>
                <i class="step02"></i><p><span>第二步</span><b>联系法院</b></p>
                <div class="arrow-r"></div>
            </li>
            <li>
                <i class="step03"></i><p><span>第三步</span><b>交保证金</b></p>
                <div class="arrow-r"></div>
            </li>
            <li>
                <i class="step04"></i><p><span>第四步</span><b>出价竞拍</b></p>
                <div class="arrow-r"></div>
            </li>
            <li>
                <i class="step05"></i><p><span>第五步</span><b>竞拍成功</b></p>
                <div class="arrow-r"></div>
            </li>
            <li>
                <i class="step06"></i><p><span>第六步</span><b>线下提货</b></p>
            </li>
        </ul>
        <!-- <a @click="flag=false" href="javascript:;" class="step-close-btn"></a> -->
    </div>
</template>
<script>
export default {
  data(){
    return{flag:true}
  }
}
</script>

<style lang="less">
.block-article {
    border: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;
    position: relative;
    background: #fff;
    margin: 20px 0;
    .step-title {
        text-align: center;
        color: #fff;
        font-size: 19px;
        line-height: 21px;
        width: 66px;
        height: 60px;
        margin-right: 35px;
        background-image: url(../../assets/img/sprites-img-s-3.png);
        background-position: 0px -1988px;
        span {
            display: block;
            padding: 8px 14px 8px 7px;
        }
    }
    .step-list {
        padding-top: 13px;
        li {
            float: left;
            .arrow-r {
                display: block;
                width: 80px;
                float: left;
                height: 34px;
                background: url(../../assets/img/arrow-r.png) no-repeat center center;
            }
            [class*="step0"] {
                display: inline-block;
                width: 34px;
                height: 34px;
                float: left;
            }
            .step01 {
                background-image: url(../../assets/img/sprites-img-s-3.png);
                background-repeat: no-repeat;
                width: 34px;
                height: 34px;
                background-position: 0px -1399px;
            }
            .step02 {
                background-image: url(../../assets/img/sprites-img-s-3.png);
                background-repeat: no-repeat;
                width: 34px;
                height: 34px;
                background-position: 0px -1345px;
            }
            .step03 {
                background-image: url(../../assets/img/sprites-img-s-3.png);
                background-repeat: no-repeat;
                width: 34px;
                height: 34px;
                background-position: 0px -1183px;
            }
            .step04 {
                background-image: url(../../assets/img/sprites-img-s-3.png);
                background-repeat: no-repeat;
                width: 34px;
                height: 34px;
                background-position: 0px -1129px;
            }
            .step05 {
                background-image: url(../../assets/img/sprites-img-s-3.png);
                background-repeat: no-repeat;
                width: 34px;
                height: 34px;
                background-position: 0px -1075px;
            }
            .step06 {
                background-image: url(../../assets/img/sprites-img-s-3.png);
                background-repeat: no-repeat;
                width: 34px;
                height: 34px;
                background-position: 0px -1021px;
            }
            p {
                margin-left: 8px;
                line-height: 17px;
                float: left;
                height: 34px;
                span {
                    display: block;
                    font-size: 13px;
                    color: #666;
                }
            }
            b {
                display: block;
                font-size: 14px;
                color: #333;
            }
        }
    }
    .step-close-btn {
        display: block;
        position: absolute;
        right: 15px;
        top: 50%;
        width: 13px;
        height: 13px;
        margin-top: -7px;
        background-image: url(../../assets/img/sprites-img-s-3.png);
        background-position: 0px -48px;
    }
}
</style>
