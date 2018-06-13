<template>
    <div>
        <sfbg></sfbg>
        <!-- 搜索 -->
        <Search></Search>
        <!-- 菜单 -->
        <Menu></Menu>
        <!-- <tiparchives></tiparchives> -->
        <div class="block-wrap details-wrap">
            <div class="auto">
                <div data-v-7b306211="" class="b-breadcrumb clearfloat">
                <div data-v-7b306211="" class="fr online-help">
                    <a data-v-7b306211="" href="/user/message.do?Web_Item_ID=16351"><i data-v-7b306211="" class="online-h1"></i>在线留言</a> 
                    <a data-v-7b306211="" href=""><i data-v-7b306211="" class="online-h2"></i>客服专线 400-820-3720</a>
                </div> 
                    <a data-v-7b306211="" href="javascript:;">全部</a> 
                    <span data-v-7b306211="">&gt;</span> 
                    <a data-v-7b306211="" href="court.do?id=2557">{{court}}</a> 
                    <span data-v-7b306211="">&gt;</span>
                    申请参拍
                </div>
            <div class="auth-top clearfix">
                <li class="txt1">标的物名称：<a href="item.do?Web_Item_ID=16363">{{auctionName}}</a></li>
                <li class="txt1">需缴纳保证金：<span class="txtred">{{bond/100}}元</span></li>
                <hr>
                <div class="fl w50">说明：<br><br><br>注意：</div>
                <div> 
                    此保证金仅使用于该标的。<br>
                    若竞拍不成功： 保证金将在竞买结束后3-5个工作日退回<br>
                    若竞拍成功：保证金直接抵扣货款至资产处置机构账户，请在规定时间内按机构指定方式完成尾款支付。<br>
                    <a href="help.do?Action=bank" class="pr30" target="_blank">使用银行卡缴纳保证金须知</a>
                </div>
            </div>
            <div class="auth-body clearfix">
                <p>
                    <span class="txt2">1. 竞买人条件确认</span>
                    <span class="txt3">因不符合条件参加竞买的，将取消您的竞得资格，竞买保证金不予退还并承担相应法律责任。</span>
                </p>
                <p class="pl20">
                    请确认您符合以下竞买条件：<br>
                    <input v-model="checkedOne" type="checkbox" id="Agree1">
                    <span class="pl5">竞买人知晓拍下不买的后果：保证金可能会被法院划扣并承担相应的司法处罚</span><br>
                    <input v-model="checkedTwo" type="checkbox" id="Agree2">
                    <span class="pl5">竞买人知晓如需办理委托竞买，须在报名前联系执行法院将委托信息进行备案并录入系统，否则将视为竞买人本人报名竞买。</span><br>
                    <input v-model="checkedThree" type="checkbox" id="Agree3">
                    <span class="pl5">竞买人已阅读并同意 《<a href="help.do?Action=netAuctionAgreement" target="_blank">公拍网竞拍服务协议</a>》，如未实地看样，视为接受标的所有瑕疵等细则</span>
                </p>
                <p class="mt30">
                    <span class="txt2">2. 竞买人身份确认</span>
                    <span class="txt3">标的物交割时将核实该信息，请保证其真实有效，如非本人购买，请提前与资产处置单位确认是否可行。</span>
                </p>
                <p class="pl20 pt10">
                </p>
                <form id="payform" method="post" action="?" target="_blank">
                    *	竞买人姓名：	<span class="txt4">{{name}}</span>(竞价成功后，将以此身份办理过户，如有委托，请咨询资产处置单位)<br>
                    *	公拍网账号：	{{account}}
                    <li>
                        *	证件类型： 居民身份证
                    </li>
                    <li>
                        *	证件号码：	<input v-on:input="checkNextState" v-model="idCard" type="text" class="input1" name="idcard" value="" id="idcard" placeholder="请输入认证的证件号码" autocomplete="off" >
                        <span id="idcardMemo"></span>
                    </li>
                    <li>
                        *	手机号码：	<input v-on:input="checkNextState" v-model="number" oninput="if(value.length>11)value=value.slice(0,11)" type="number" class="input1" name="Mobile" id="Mobile" placeholder="请输入11位手机号" >
                        <span id="mobileMemo"></span>
                    </li>
                    <li>
                        *	联系地址：	<input v-on:input="checkNextState" type="text" class="input1" name="address" v-model="address" id="address" placeholder="请输入联系地址">
                        <span id="addressMemo"></span><span id="debug"></span>
                    </li>
                    <li>
                        <div v-on:click="pay()" id="btn_submit" v-bind:class="regx?'button03':'btndisabled'" class="w300 h30">下一步，去支付。</div>
                        <!-- <button type="submit" @on="submit(event)" id="btn_submit" v-bind:class="regx?'button03':'btndisabled'" class="w300 h30">下一步，去支付。</button> -->
                        <input type="hidden" name="lockidNum" id="lockidNum" value="">
                        <input type="hidden" name="lockidState" id="lockidState" value="0">
                        <input type="hidden" name="Web_Item_ID" id="Web_Item_ID" value="16363">
                        <span id="submitMemo">请仔细阅读竞买人条件，并勾选确认！</span>
                    </li>
                </form>
            </div>
            </div>
        </div>
        <div v-show="alertShow" class="modal fade in" style="width: 600px;" id="payConfirm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" v-on:click="close" class="close" data-dismiss="modal" aria-hidden="true">
                    ×
                    </button>
                    <h4 class="modal-title" id="myModalLabel">
                    支付帮助
                    </h4>
                </div>
                <div class="modal-body" id="myModalbody"><p>请在弹出的新窗口完成支付。</p><p>请根据您的支付情况，点击下方按钮。</p></div>
                <div class="modal-footer">
                    <button type="button" id="btnclose" class="btn btn-default" v-on:click="clickSure('0')" data-dismiss="modal">支付遇到问题</button>
                    <button type="button" id="btndone" class="btn btn-danger" v-on:click="clickSure('1')">我已支付并申请审核</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        </div>
        <div v-show="alertShow" class="modal-backdrop fade in"></div>
    </div>
</template>
<script>
import sfbg from './sifa/sfbg.vue';
import Search from './sifa/sfsearch.vue';
import Menu from './sifa/Menu.vue';
import tiparchives from './detail/tiparchives.vue';
export default {
    components:{
        sfbg,Search,Menu,tiparchives
    },
    data(){
        return {
            bond:'',
            court:'',
            auctionName:'',
            checkedOne:false,
            checkedTwo:false,
            checkedThree:false,
            idCard:'',
            number:'',
            regx:false,
            href:'',
            name:localStorage.name,
            address:'',
            nickname:localStorage.nickname,
            alertShow:false,
            prodId:localStorage.prodId,
            account:localStorage.mobile

        }
    },
    methods:{
        pay(){
            if(this.regx){
                this.alertShow=true
                window.open(this.href, '_blank').location;
            }
        },
        //查询登录用户个人信息
        userInfo(){

        },
        //检查是否可以进行下一步支付
        checkNextState(){
            if(this.checkedOne&&this.checkedTwo&&this.checkedThree&&this.idCard!=''&&this.number!=''&&this.address!=''){
                var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
                if(!regIdNo.test(this.idCard)){     
                    this.regx=false               
                }else if(!(/^1[34578][0-9]{9}$/.test(this.number))){
                    this.regx=false
                }else{
                    if(this.idCard==localStorage.idCard){
                        this.regx=true
                    }else{
                        this.regx=false
                    }
                    
                }
            }else{
                this.regx=false
            }
        },
        //点击支付确认按钮
        clickSure(val){
            if(val=='0'){
                this.alertShow=false
            }else if(val=='1'){
                //this.alertShow=true
                this.isPay()
            }
        },
        //查询是否支付成功
        isPay(){
            var that=this
            var meetId=localStorage.meetId
            if(meetId){
                meetId=localStorage.meetId
            }else{
                meetId="" 
            }
            var data = JSON.stringify({
                prodId: localStorage.prodId,
                meetId: meetId
            })
            var postData = that.$qs.stringify({
                info: data
            })
            that.$http({
                    url: '/gpai/pay/checkMargin.do',
                    method: 'post',
                    data: postData
            })
            .then(function(res) {
                console.log(res)
                if(res.data.code=='0000'){
                    if(res.data.data.code=='0'){
                        console.log("支付成功")
                        that.$router.push({ path: '/detail',query:{id:sessionStorage.detailId}})
                    }else{
                        alert("未找到您的支付信息，如已支付完成，请稍等。")
                    }
                    console.log('用户支付信息查询成功')
                    
                }else{
                    alert(res.data.msg)
                    console.log('用户支付信息查询失败')
                }
                    
            })
            .catch(function(error) {
                console.log(error);
                alert('用户支付信息查询出错')
            })
        },
        close(){
            this.alertShow=false
        }
    },
    created(){
        this.bond=sessionStorage.bond
        this.court=sessionStorage.court
        this.auctionName=sessionStorage.auctionName
        this.number=localStorage.mobile
        if(localStorage.address=='undefined'){
            this.address=""
        }else{
            this.address=localStorage.address
        }
        
        var data = JSON.stringify({
            userId: localStorage.userId,
            prodId: localStorage.prodId,
            meetId: sessionStorage.meetId,
            OrderAmt: sessionStorage.bond
        })
        this.href="/gpai/pay/toPay.do?info="+data
        console.log(sessionStorage.bond)
    },
    watch:{
        checkedOne(curVal,oldVal){
            this.checkNextState()
        },
        checkedTwo(curVal,oldVal){
            this.checkNextState()
        },
        checkedThree(curVal,oldVal){
            this.checkNextState()
        }
    }
}
</script>

<style>
.modal-backdrop, .modal-backdrop.fade.in {
    opacity: .5;
    filter: alpha(opacity = 50);
}
.modal-backdrop, .modal-backdrop.fade.in {
    opacity: .5;
    filter: alpha(opacity = 50);
}
.modal-backdrop.fade {
    opacity: 0;
}
.fade.in {
    opacity: 1;
}
.modal-backdrop.fade {
    opacity: 0;
}
.fade.in {
    opacity: 1;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}
.modal.fade.in {
    top: 30%;
}
.fade.in {
    opacity: 1;
}
.modal {
    position: fixed;
    top: 10%;
    left: 50%;
    z-index: 1050;
    width: 360px;
    margin-left: -280px;
    background-color: #fff;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
}
.fade {
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -moz-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
}
.modal-header {
    padding: 9px 15px;
    border-bottom: 1px solid #eee;
}
.modal-header .close {
    margin-top: 2px;
}
button.close {
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
    -webkit-appearance: none;
}
.close {
    float: right;
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .2;
    filter: alpha(opacity = 20);
}
h4 {
    font-size: 17.5px;
}
h1, h2, h3, h4, h5, h6 {
    margin: 10px 0;
    font-family: inherit;
    font-weight: bold;
    line-height: 20px;
    color: inherit;
    text-rendering: optimizelegibility;
}
.modal-body {
    position: relative;
    max-height: 400px;
    padding: 15px;
    overflow-y: auto;
}
.modal-footer {
    padding: 14px 15px 15px;
    margin-bottom: 0;
    text-align: right;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    -webkit-border-radius: 0 0 6px 6px;
    -moz-border-radius: 0 0 6px 6px;
    border-radius: 0 0 6px 6px;
    -webkit-box-shadow: inset 0 1px 0 #fff;
    -moz-box-shadow: inset 0 1px 0 #fff;
    box-shadow: inset 0 1px 0 #fff;
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    vertical-align: middle;
    cursor: pointer;
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top, #fff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #fff, #e6e6e6);
    background-image: -o-linear-gradient(top, #fff, #e6e6e6);
    background-image: linear-gradient(to bottom, #fff, #e6e6e6);
    background-repeat: repeat-x;
    border: 1px solid #ccc;
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border-bottom-color: #b3b3b3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}
button, html input[type="button"], input[type="reset"], input[type="submit"] {
    cursor: pointer;
    -webkit-appearance: button;
}
button, input, select, textarea {
    margin: 0;
    font-size: 100%;
    vertical-align: middle;
}
input, textarea, keygen, select, button, meter, progress {
    -webkit-writing-mode: horizontal-tb;
}
.modal-footer .btn+.btn {
    margin-bottom: 0;
    margin-left: 5px;
}
.btn-danger {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #da4f49;
    background-image: -moz-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#bd362f));
    background-image: -webkit-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -o-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: linear-gradient(to bottom, #ee5f5b, #bd362f);
    background-repeat: repeat-x;
    border-color: #bd362f #bd362f #802420;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffbd362f', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}
.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    color: #333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    vertical-align: middle;
    cursor: pointer;
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top, #fff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #fff, #e6e6e6);
    background-image: -o-linear-gradient(top, #fff, #e6e6e6);
    background-image: linear-gradient(to bottom, #fff, #e6e6e6);
    background-repeat: repeat-x;
    border: 1px solid #ccc;
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border-bottom-color: #b3b3b3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.btn-danger {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #da4f49;
    background-image: -moz-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ee5f5b), to(#bd362f));
    background-image: -webkit-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: -o-linear-gradient(top, #ee5f5b, #bd362f);
    background-image: linear-gradient(to bottom, #ee5f5b, #bd362f);
    background-repeat: repeat-x;
    border-color: #bd362f #bd362f #802420;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b', endColorstr='#ffbd362f', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}
.modal-body {
    position: relative;
    max-height: 400px;
    padding: 15px;
    overflow-y: auto;
}
p {
    display: block;
    
    font-size: 16px;
}
.btndisabled {
    color: #848284;
    background: #d6d3ce;
    line-height: 30px;
}
.button03 {
    height: 35px;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    font-family: "微软雅黑";
    color: #FFF;
    background: #d80d19;
}
.auto{
	width: 1200px;
	margin: 0 auto;
}
.online-h1 {
   background-image: url(../assets/img/sprites-img-s-3.png);
    background-repeat: no-repeat;
    width: 21px;
    height: 21px;
    background-position: 0px -426px;
}
.online-h2 {
    background-image: url(../assets/img/sprites-img-s-3.png);
    background-repeat: no-repeat;
    width: 21px;
    height: 21px;
    background-position: 0px -385px;
}
.block-wrap{
    background: #eee;
}
.block-wrap .b-breadcrumb a {
    color: #666;
}
.block-wrap .b-breadcrumb {
    font-size: 13px;
    color: #999;
    padding: 20px 0;
}
.online-help a {
    font-size: 15px;
    margin-left: 10px;
    float: left;
}
.block-wrap .b-breadcrumb .online-help a {
    color: #333;
}
.online-help [class*="online-h"] {
    float: left;
    width: 21px;
    height: 21px;
    margin-right: 3px;
}
.block-wrap .b-breadcrumb span {
    color: transparent;
    margin: 0 5px;
}
.block-wrap .b-breadcrumb span {
    background-position: 0px -188px;
}
.block-wrap .b-breadcrumb span, .menu2 .auto li .mhot, .header2-search form .search2-btn, .details-side .side-block .help-list li, .header .top-right i, .notice-list .item-desc a, .biao-piclist div .badge2, .in-cont302 #tab .tab_title li.selected {
    background-image: url(../assets/img/sprites-img-s-3.png);
}
/* auth-top */
.details-wrap .auth-top {
    background: #f7f7f7;
    border: 1px solid #ddd;
    padding: 30px;
    font-size: 13px;
}
.details-wrap .auth-top li {
    padding: 5px;
}
.details-wrap .auth-top .txt1 {
    color: #000;
    font-size: 16px;
    font-weight: 900;
}
.details-wrap .auth-top a {
    color: #308ac9;
}
.details-wrap .auth-top .txtred {
    color: #d91715;
    font-size: 20px;
    font-weight: 900;
}
.details-wrap .auth-top hr {
    margin: 0px 20px 10px 20px;
}
.w50 {
    width: 50px;
}
/* auth-body */
.details-wrap .auth-body {
    background: #fff;
    border: 1px solid #ddd;
    padding: 30px;
    font-size: 13px;
    line-height: 175%;
}
.pl20 {
    padding-left: 20px;
}
.mt30 {
    margin-top: 30px;
}
.pt10 {
    padding-top: 10px;
}
.details-wrap .auth-body .txt2 {
    color: #333;
    font-size: 18px;
    font-weight: 600;
}
.details-wrap .auth-body .txt3 {
    color: #ba8d00;
    padding-left: 20px;
}
.pl5 {
    padding-left: 5px;
}
form {
    margin: 0 0 20px;
}
.details-wrap .auth-body .txt4 {
    padding: 10px 0;
    font-size: 20px;
    letter-spacing: 5px;
    font-weight: 900;
}
.details-wrap .auth-body li {
    padding: 7px 0 0 20px;
}
.details-wrap .auth-body .input1 {
    width: 220px;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 14px;
    height: 30px;
    margin-top: -4px;
    line-height: 30px;
    padding-left: 3px;
}
.block-wrap input, .block-wrap button {
    border: 0;
}
.w300 {
    width: 300px;
}
.h30 {
    height: 30px;
    text-align: center;
}
</style>

