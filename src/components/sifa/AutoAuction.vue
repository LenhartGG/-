<template>
    <div>
        <div class="in-cont4 clearfloat">
            <div class="slideTxtBox">
                <ul class="hd">
                    <li class="on">法院自主拍卖</li>
                    <li class="more"><a href="javascript:void(0)">更多>></a></li>
                </ul>
            </div>
        </div>

        <div class="blockwrap-box">
            <ul>
            <li v-for="(value, key, index) of listOne" :key="index" v-on:click="goDetail(value.id)">
                <div class="list-item">
                        <span class="badge2">{{value.auctionType}}</span>
                        <div class="item-mask-block">
                            <a href="javascript:void(0)">
                            <img src="../../assets/img/201801311632558781.jpg" alt="">
                            </a>
                            <p class="item-mask-tit">
                            <a href="javascript:void(0)" v-bind:title="value.name">{{value.name}}</a>
                            </p>
                        </div>
                        <div class="gpai-infos">
                            <p>
                            <span v-show="value.bidno!='0'&&value.auctionStatus=='1'">最新价</span>
                            <span v-show="value.bidno=='0'">起拍价</span>
                            <span v-show="value.auctionStatus=='2'">成交价</span>
                            <b v-show="value.bidno!='0'&&value.auctionStatus=='1'" class="price-red">{{value.lastPrice/100}}</b>
                            <b v-show="value.bidno=='0'" class="price-red">{{value.startPrice/100}}</b>
                            <b v-show="value.auctionStatus=='2'" class="price-red">{{value.purchasePrice/100}}</b>
                            <span class="price-red">元</span>
                            </p>
                            <p>
                            <span>评估价：</span>
                            <span><b>{{value.evaluationPrice/10000/100}}</b>万元</span>
                            </p>
                            <p>
                            <span class="pai-time">
                                <span v-show="value.auctionStatus=='0'">开始时间：{{value.startTime}}</span>
                                <span v-show="value.auctionStatus=='1'">预计结束：{{value.endTime}}</span>
                                <span v-show="value.auctionStatus=='2'||value.auctionStatus=='3'||value.auctionStatus=='4'">结束时间：{{value.endTime}}</span>
                            </span>
                            <label v-show="value.auctionStatus=='0'" class="status-badge">即将开始</label>
                            <label v-show="value.auctionStatus=='1'" class="status-badge">正在拍卖</label>
                            <label v-show="value.auctionStatus=='2'" class="status-badge">成交</label>
                            <label v-show="value.auctionStatus=='3'" class="status-badge">流拍</label>
                            <label v-show="value.auctionStatus=='4'" class="status-badge">撤拍</label>
                            </p>
                            <div class="bidding clearfloat">
                            <div v-show="value.bidno!='0'" class="bidding-left fl"><b>{{value.bidno}}</b>&nbsp;次出价</div>
                            <div v-show="value.bidno=='0'" class="bidding-left fl"><b>{{value.wgno}}</b>&nbsp;次围观</div>
                            <div class="bidding-right fr"><a href="javascript:void(0)">详细</a></div>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
        </div>

        <div class="in-cont4 clearfloat">
            <div class="slideTxtBox">
                <ul class="hd">
                    <li class="on">法院委托拍卖</li>
                    <li class="more"><a href="javascript:void(0)">更多>></a></li>
                </ul>
            </div>
        </div>

        <div class="blockwrap-box clearfloat">
            <ul>
                <li v-for="(value, key, index) of listTwo" :key="index" v-on:click="goDetail(value.id)">
                    <div class="list-item">
                        <span class="badge2">{{value.auctionType}}</span>
                        <div class="item-mask-block">
                            <a href="javascript:void(0)">
                            <img src="../../assets/img/201801311632558781.jpg" alt="">
                            </a>
                            <p class="item-mask-tit">
                            <a href="javascript:void(0)" v-bind:title="value.name">{{value.name}}</a>
                            </p>
                        </div>
                        <div class="gpai-infos">
                            <p>
                            <span v-show="value.bidno!='0'&&value.auctionStatus=='1'">最新价</span>
                            <span v-show="value.bidno=='0'">起拍价</span>
                            <span v-show="value.auctionStatus=='2'">成交价</span>
                            <b v-show="value.bidno!='0'&&value.auctionStatus=='1'" class="price-red">{{value.lastPrice/100}}</b>
                            <b v-show="value.bidno=='0'" class="price-red">{{value.startPrice/100}}</b>
                            <b v-show="value.auctionStatus=='2'" class="price-red">{{value.purchasePrice/100}}</b>
                            <span class="price-red">元</span>
                            </p>
                            <p>
                            <span>评估价：</span>
                            <span><b>{{value.evaluationPrice/10000/100}}</b>万元</span>
                            </p>
                            <p>
                            <span class="pai-time">
                                <span v-show="value.auctionStatus=='0'">开始时间：{{value.startTime}}</span>
                                <span v-show="value.auctionStatus=='1'">预计结束：{{value.endTime}}</span>
                                <span v-show="value.auctionStatus=='2'||value.auctionStatus=='3'||value.auctionStatus=='4'">结束时间：{{value.endTime}}</span>
                            </span>
                            <label v-show="value.auctionStatus=='0'" class="status-badge">即将开始</label>
                            <label v-show="value.auctionStatus=='1'" class="status-badge">正在拍卖</label>
                            <label v-show="value.auctionStatus=='2'" class="status-badge">成交</label>
                            <label v-show="value.auctionStatus=='3'" class="status-badge">流拍</label>
                            <label v-show="value.auctionStatus=='4'" class="status-badge">撤拍</label>
                            </p>
                            <div class="bidding clearfloat">
                            <div v-show="value.bidno!='0'" class="bidding-left fl"><b>{{value.bidno}}</b>&nbsp;次出价</div>
                            <div v-show="value.bidno=='0'" class="bidding-left fl"><b>{{value.wgno}}</b>&nbsp;次围观</div>
                            <div class="bidding-right fr"><a href="javascript:void(0)">详细</a></div>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'autoauction',
  data () {
    return {
      currentPage:'1',//列表数据请求开始条数
      itemsPerPage:'20',//列表没次请求数量
      listOne:'',
      listTwo:''

    }
  },
  methods:{
      //请求拍品列表
      list(type,itemsPerPage,currentPage){
        var that=this
        var data = JSON.stringify({
            auctionClass: type,
            currentPage:currentPage,
            itemsPerPage:itemsPerPage
        })
        var postData = that.$qs.stringify({
            info: data
        })
        that.$http({
            url: '/gpai/product/list.do',
            method: 'post',
            data: postData
        })
        .then(function(res) {
            console.log(res)
            if(type=='自主拍卖'){
                that.listOne=res.data.data.listObj
                console.log(res.data.data.listObj[1].bidno)
            }else if(type=='委托拍卖'){
                that.listTwo=res.data.data.listObj
            }  
        })
        .catch(function(error) {
            console.log(error);
            alert('请求拍品列表失败')
        })
      },
      //跳转详情页
      goDetail(id){
          this.$router.push({ path: '/detail',query:{id:id}})
      }
  },
  created(){
      this.list('自主拍卖',this.startItem,this.currentPage)
      this.list('委托拍卖',this.startItem,this.currentPage)
  }
}
</script>
<style>
/* in-cont4 start */
.in-cont4 .slideTxtBox{
  float: left;
  width: 100%;
  margin-top: 16px;
}
.in-cont4 .slideTxtBox .hd {
  height: 40px;
  width: 100%;
  border-bottom: 2px solid #cf2b29;
}
.in-cont4 .slideTxtBox .hd li{
  float: left;
  width: 158px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
.in-cont4 .slideTxtBox .hd li.on{
  height: 40px;
  color:#df0404;
  background: url(../../assets/img/tab_on.jpg) no-repeat center bottom;
}
.in-cont4 .slideTxtBox .hd li.more{
  font-size: 14px;
  float: right;
}
/* in-cont4 end */
.blockwrap-box{
  margin: 0 -15px;
}
.blockwrap-box ul li {
  float: left;
  width: 25%;
  margin-top: 35px;
}
.blockwrap-box .list-item{
  position: relative;
  width: 278px;
  margin: 0 auto;
}
.blockwrap-box .list-item .badge2{
  position: absolute;
  z-index: 2;
  text-align: center;
  top: 0;
  left: 0;
  display: block;
  width: 85px;
  height: 23px;
  line-height: 23px;
  color: #fff;
  font-size: 12px;
  background: url(../../assets/img/sprites-img-s-3.png);
  background-position: 0 -508px;
}
.blockwrap-box .list-item .item-mask-block{
  position: relative;
}
.blockwrap-box .list-item .item-mask-block img{
  width: 278px;
  height: 208px;
}
.blockwrap-box .list-item .item-mask-block .item-mask-tit{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 44px;
  line-height: 44px;
  background: rgba(50, 50, 50, 0.8)
}
.blockwrap-box .list-item .item-mask-block .item-mask-tit a{
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-item .gpai-infos {
  border: 1px solid #d2d2d2;
  text-align: left;
  font-size: 12px;
  padding-top: 6px;
}
.list-item .gpai-infos p{
  padding-left: 10px;
  margin-bottom: 3px;
}
.list-item .gpai-infos .price-red{
    font-size: 24px;
    color: #cf2b29;
    font-family: "微软雅黑";
}
.list-item .gpai-infos .status-badge {
  margin-left: 5px;
}
.list-item .gpai-infos .status-badge {
  display: inline-block;
  color: #fff;
  background: #ff0000;
  width: 72px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
.list-item .gpai-infos .bidding{
  border-top: 1px solid #d2d2d2;
  padding: 10px 0;
  margin-top: 7px;
}
.list-item .gpai-infos .bidding .bidding-left{
  width: 50%;
  text-align: center;
}
.list-item .gpai-infos .bidding .bidding-right{
  width: 50%;
  text-align: center;
}
</style>
