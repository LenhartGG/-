<template>
    <div>
        <div class="meb-ycp pb20" id="Right" v-show="userStatus!='0'">
            <div class="meb-ycp01">实名认证第一步：银联校验</div>
            <form class="yhzx-ri" method="post" action="?" onsubmit="return checkform()">
                <div class="meb-zhuce">
                    <div class="meb-zhuce01">
                        <li>请准确填写下面四项仅用于实名认证的信息，公拍网予以保密。</li>
                        <li class="p5"><input type="text" v-model="name" id="realName" name="realName" placeholder="本人真实姓名" value="" class="meb-int0 w240"> <span class="gray">请输入您的真实姓名</span></li>

                        <li class="p5"><input v-model="bankNo" type="text" id="cardNo" name="cardNo" placeholder="本人银行卡号" value="" class="meb-int0 w240"> <span class="gray">请输入您的银行卡号</span><span id="cardNo2"></span></li>
                        <li class="p5"><input v-model="idNo" type="text" id="idNumber" name="idNumber" placeholder="本人身份证号" value="" class="meb-int0 w240"> <span class="gray">请输入您留存银行的证件号</span></li>
                        <li class="p5"><input v-model="bankMobile" type="text" id="mobile" name="mobile" placeholder="本人留存银行手机号" value="" class="meb-int0 w240"> <span class="gray">请输入您留存银行手机号</span></li>

                        <li class="p5"><input v-model="yzm" type="text" id="sCode" name="sCode" placeholder="验证码" value="" maxlength="6" class="w120 meb-int0">
                        <button v-on:click='sendMsgCodeEvent()' v-bind:class="yzmsendState=='0'?'btnacive':''" class="button02 w80" id="Btn_SendCode" name="Btn_SendCode" type="button" value="" >{{buttonText}}</button>
                        <span class="gray">请点击发送验证码然后输入您收到的短信验证码</span>
                        </li>


                        <input type="hidden" name="Action" id="Action" value="REG">
                        <input type="hidden" name="ReSecond" id="ReSecond" value="60">

                        <!-- <button v-on:click="sendMsgCodeEvent1()" class="button01 w210 btnacive" id="Btn_doSubmit" name="" type="button" value="">提交验证</button> -->
                        <button v-on:click="dataRegx()" class="button01 w210 btnacive" type="button" value="">提交验证</button>
                    </div>

                    <div class="meb-zhuce03">
                        温馨提示：<br>
                        <li>这里的银行卡仅作为实名认证使用，和支付无关。
                        </li><li>由于交通银行卡的认证通道不稳定，时有认证故障，使用请尝试其他银行卡。
                        </li><li>若认证不成功，请联系发卡行客户服务中心。

                        </li>
                    </div>
                    <div class="meb-zhuce03" style="display:none">
                        <p class="m5">银行卡实名认证不成功？您可以尝试：</p>
                        <a href="javascript:void(0)" v-on:click="setData" class="m5"><span class="w210 btnbg0  btnbg3 p7">人工实名认证</span></a>
                    </div>
                </div>
            </form>
            
        </div>
        <form class="yhzx-ri" v-show="userStatus=='0'">	
            <!-- meb-middle -->
            <div class="meb-middle">
                <div class="meb-ycp" id="Right"> 
                    <div class="meb-ycp01">实名认证已完成
                    </div>
                    
                    <div class="meb-zhuce">
                        <div class="meb-zhuce01">
                        <b class="red meb-info01">认证信息&nbsp;&nbsp;</b><br>
                        <li><input type="text" id="RealName" name="RealName" placeholder="姓名" v-bind:value="showName" class="meb-int1" readonly="">真实姓名不可修改



                        </li><li><input type="text" id="idcard" name="idcard" class="meb-int1" placeholder="证件号" v-bind:value="showIdno" readonly="">
                        当您通过实名认证后此信息无法修改</li>
                        </div>



                        <div class="meb-zhuce03">
                        温馨提示：<br>
                        <li>您已通过实名认证，可以在标的页面申请参拍。
                        </li><li>如有其他问题，请联系客服。
                        </li></div>
                    </div>

            
                </div>

            </div>
        </form>
    </div>
</template>

<script>
// import realname2 from './realname2'
// import func from './vue-temp/vue-editor-bridge';
// import func from './vue-temp/vue-editor-bridge';
export default {
    data(){
        return{
            realname2:'realname2',
            realnameshow: false,
            name:'',
            idNo:'',//身份证号 
            bankNo:'',//银行卡号
            bankMobile:'',//月预留手机号
            yzm:'',
            yzmsendState:'0',//0没发送1发送成功
            buttonText:'发送验证码',
            userStatus:'1',//用户实名认证状态
            showName:'',
            showIdno:''

        }
    },
    components:{
        // realname2
    },
    methods:{
        setData(){
            this.$emit('ievent', this.realnameshow)
        },
        //
        //点击发送验证码按钮时间
        sendMsgCodeEvent(){
            var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证验证
            var regBankNo=/^([1-9]{1})(\d{14}|\d{18})$/;//银行卡验证正则
            if(!this.name){
                alert('姓名不能为空')
            }else if(!this.bankNo){
                alert('银行卡号不能为空')
            }else if(!regBankNo.test(this.bankNo)){
                alert('请输入正确的银行卡号')
            }else if(!this.idNo){
                alert('身份证号不能为空')
            }else if(!regIdNo.test(this.idNo)){
                alert('请输入正确的身份证号码')
            }else if(!this.bankMobile){
                alert('请输入银行预留手机号')
            }else if(!(/^1[34578][0-9]{9}$/.test(this.bankMobile))){
                alert('请输入正确手机号')
            }else{
                this.sendCode()
            }
        },
        //发送验证码接口调用
        sendCode(){
            const that=this
            console.log(that.bankMobile)
            var data = JSON.stringify({
                mobile: that.bankMobile
            })
            var postData = that.$qs.stringify({
                info: data
            })
            that.$http({
                url: '/gpai/register/sendCaptchas.do',
                method: 'post',
                data: postData
            })
            .then(function(res) {
                console.log(res)
                if(res.data.code=='0000'){
                    that.countDown(60)
                    that.yzmsendState=1
                }else{
                    that.yzmsendState=0
                    alert('验证码发送失败')
                }
            })
            .catch(function(error) {
                console.log(error);
                alert('验证码发送失败')
            })
        },
        //验证码验证验证码验证
        yzmValidate(){
            var that=this
            var data = JSON.stringify({
                mobile: that.bankMobile,
                smsVerifyCode:that.yzm
            })
            var postData = that.$qs.stringify({
                    info: data
            })
            that.$http({
                    url: '/gpai/register/checkCaptchas.do',
                    method: 'post',
                    data: postData
            })
            .then(function(res) {
                    console.log(res)
                    if(res.data.code=='0000'){
                        that.realNameAuth()
                    }else{
                        alert(res.data.msg)
                    }
            })
            .catch(function(error) {
                alert('验证码验证接口出错')
                    console.log(error);
            })
        },
        //短信倒计时
        countDown(time){
            var that=this
            var timer=setTimeout(function() { 
                that.countDown(that.buttonText) 
            },1000) 
            if (time == 1) { 
                that.yzmsendState='0'
                that.buttonText='重新发送'
                clearTimeout(timer)
            } else { 
                time--; 
                that.buttonText=time
            }
        },
        dataRegx(){
            if(!this.name){
                alert('请输入姓名')
            }else if(!this.bankNo){
                alert('请输入银行卡号')
            }else if(!this.idNo){
                alert('请输入身份证号')
            }else if(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.No)){
                alert('身份证号码有误')
            }else if(!this.bankMobile){
                alert('手机号不能为空')
            }else{
                this.yzmValidate()
            }
        },
        //实名认证
        realNameAuth(){
            var that=this
            var data = JSON.stringify({
                userId: localStorage.userId,
                name:that.name,
                idNo:that.idNo,
                bankNo:that.bankNo,
                bankMobile:that.bankMobile
            })
            var postData = that.$qs.stringify({
                    info: data
            })
            that.$http({
                    url: '/gpai/auth/auto.do',
                    method: 'post',
                    data: postData
            })
            .then(function(res) {
                console.log(res)
                if(res.data.code=='0000'){
                    alert('实名认证成功')
                    that.userStatus='0'
                    localStorage.userStatus='0'
                    localStorage.name=that.name
                    localStorage.idCard=that.idNo
                    that.showName=localStorage.name.substring(0,1)+"*"
                    that.showIdno=localStorage.idCard.substring(0,2)+"****"+localStorage.idCard.slice(-2)
                    console.log(localStorage.name)
                    console.log(that.showName)
                    if(sessionStorage.from||sessionStorage.from!='undefined'||sessionStorage.from!='null'){
                        //从详情页面来
                        if(sessionStorage.from=='detail'){
                            that.$router.push({path: '/detail',query:{id:sessionStorage.detailId}})
                        }else if(sessionStorage.from=='register'){
                            that.$router.push({path: '/sf_index'})
                        }
                    }
                }else{
                    alert(res.data.msg)
                }
            })
            .catch(function(error) {
                console.log(error.data.msg);
            })
        }
    },
    created(){
        this.userStatus=localStorage.userStatus
        if(localStorage.name!='undefined'&&localStorage.name!='null'){
            this.showName=localStorage.name.substring(0,1)+"*"
        }else{
            this.showName=""
        }
        if(localStorage.idCard!='undefined'&&localStorage.idCard!='null'){
            this.showIdno=localStorage.idCard.substring(0,2)+"****"+localStorage.idCard.slice(-2)
        }else{
            this.showIdno=""
        }
        
    }
}
</script>



<style lang="less" scoped>
.meb-middle {
    width: 705px;
    float: left;
}
.meb-ycp {
    width: 100%;
    float: left;
    border: 1px solid #CCC;
    position: relative;
}
.meb-ycp .meb-ycp01 {
    width: 100%;
    float: left;
    height: 45px;
    line-height: 45px;
    background: #F2F2F2;
    text-indent: 15px;
    font-size: 14px;
}
.meb-zhuce {
    width: 100%;
    float: left;
}
.meb-zhuce .meb-zhuce01 {
    width: 676px;
    padding: 15px;
    float: left;
    border-bottom: 1px solid #CCC;
}
.meb-zhuce03 {
    width: 676px;
    padding: 15px;
    float: left;
    border-bottom: 1px solid #CCC;
    line-height: 150%;
    font-size: 12px;
}
.meb-zhuce .meb-zhuce01 .meb-info01 {
    float: left;
    margin-bottom: 10px;
}
.red {
    color: #d80d19;
}
.meb-zhuce .meb-zhuce01 li {
    width: 100%;
    float: left;
    height: 31px;
    line-height: 31px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #505257;
}
.meb-zhuce .meb-zhuce01 li .meb-int1 {
    width: 210px;
    height: 28px;
    line-height: 28px;
    float: left;
    margin-right: 25px;
    text-indent: 7px;
    color: #505257;
}
.meb-zhuce .meb-zhuce01 li input {
    margin-right: 5px;
    vertical-align: text-bottom;
}
input[disabled], select[disabled], textarea[disabled], input[readonly], select[readonly], textarea[readonly] {
    cursor: not-allowed;
    background-color: #eee;
}
.meb-zhuce03 {
    width: 676px;
    padding: 15px;
    float: left;
    border-bottom: 1px solid #CCC;
    line-height: 150%;
    font-size: 12px;
}
input:focus{
    outline:lightblue 2px solid;
}
.meb-ycp {
    width: 100%;
    float: left;
    border: 1px solid #CCC;
    position: relative;
    .meb-ycp01 {
        width: 100%;
        height: 45px;
        line-height: 45px;
        background: #F2F2F2;
        text-indent: 15px;
        font-size: 14px;
    }
    .meb-zhuce{
        .meb-zhuce01{
            width: 676px;
            padding: 15px;
            float: left;
            border-bottom: 1px solid #CCC;
            li{
                width: 100%;
                float: left;
                height: 31px;
                line-height: 31px;
                margin-bottom: 10px;
                font-size: 12px;
                color: #505257;
                .meb-int0 {
                    height: 28px;
                    line-height: 28px;
                    float: left;
                    margin-right: 12px;
                    color: #505257;
                    padding: 3px;
                    font-size: 16px;
                }
            }
        }
        .meb-zhuce03{
            width: 676px;
            padding: 15px;
            float: left;
            border-bottom: 1px solid #CCC;
            line-height: 150%;
            font-size: 12px;
        }
    }

}

.pb20 {
    padding-bottom: 20px;
}
.p5 {
    padding: 5px;
}
.gray {
    color: gray;
}
.btnbg0 {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    font-family: "微软雅黑";
}
.button01 {
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    border: 0;
    letter-spacing: 5px;
}
.button02 {
    width: 65px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #CCC;
    font-size: 12px;
    border-radius: 4px;
}
.btnbg3 {
    background: #ab8e62;
    color: #FFF;
}
.btnacive {
    color: #fff;
    background: #df0404;
    cursor: pointer;
}
.p7 {
    padding: 7px;
}
.w210 {
    width: 210px;
}
.w120 {
    width: 120px;
}
.w80 {
    width: 80px;
}
.m5 {
    margin: 5px;
}
</style>
