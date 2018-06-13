<template>
  <div class="login">
    <headernav></headernav>
    <div class="nav3">
      <div class="auto">
        <div class="gpai-logo2">
          <a href="/"><img class="img" src="../assets/img/sf_logo.png" alt=""></a>
        </div>
        <div class="nav3-info1">欢迎登录</div>
      </div>
    </div>
    <div class="login-cont">
      <div class="auto">
        <div class="login-cont1">
          <div class="login-cont101" v-show="loginType==0">
            <b>公拍网会员</b>
            <a href="javascript:void(0)" v-on:click="changeType('numLogin')"><span class="red fr">&gt;手机登录</span></a>
          </div>
          <div class="login-cont101" v-show="loginType==1">
            <b>手机号登录</b>
            <a href="javascript:void(0)" v-on:click="changeType('acountLogin')"><span class="red fr">&gt;账号登录</span></a>
          </div>
          <div class="login-cont102" v-show="loginType==0">
          公共场所不建议自动登录，以防账号丢失
          </div>
          <div class="login-cont103" v-show="loginType==0">
            <dd><input v-model.number="number" oninput="if(value.length>11)value=value.slice(0,11)" type="number" class="dl-user" name="username" id="username" placeholder="用户名或手机号"></dd>
            <dd><input v-model="password" v-on:keyup.enter="login()" class="dl-password" onfocus="this.type='password'" type="text" name="password" id="password" placeholder="密码"></dd>
            <dd class="dl-forget">
                <!-- <input type="checkbox" v-model="autoLoginState">自动登录   -->
            <span class="fr"><a href="">忘记密码？</a></span></dd>
            <dd class="dl-submit"><input type="button" value="登录" v-on:click="login()"></dd>
            <!-- <router-link :to="register" class="new-user ahover">注册新用户?</router-link> -->
            <router-link :to="'register'" class="new-user ahover">注册新用户?</router-link>
            <a href="" class="new-user ahover">收不到短信?</a>
          </div>
          <div v-show="loginType==1">
            <div class=" pt7">
                <input v-model="mobile" class="userinput w246 ico-shouji" name="mobile" id="mobile" type="text" value="" placeholder="请输入11位手机号！">
            </div>
            <div class=" pt7">
                <input v-model="userYzmpic" id="vCode" name="vCode" class="userinput ico-left w150" placeholder="验证码">
                <img id="CodeImg" v-bind:src="imgYzmSrc" title="看不清楚？点击刷新！" align="absmiddle" v-on:click="reloadImgSrc()">
            </div>
            <div class="pt7">
                <button v-on:click="sendMsgCodeEvent()" v-bind:class="yzmsendState=='0'?'btnacive':''" class="button01 w290" id="Btn_SendCode" name="" type="button" value="">{{buttonText}}</button>
            </div>
            <div class=" pt7">
                <input v-model="userYzmmsg" class="userinput w246 ico-signal" name="sCode" id="sCode" type="text" placeholder="请输入手机收到的验证码！">
            </div>
            <div class="input4 pt7">
                <button v-on:click="submit()" v-bind:class="yzmsendState=='1'?'btnacive':''" class="button01 w290" id="Btn_SendCheck" name="" type="button" value="">提交验证</button>
            </div>
            <div class="denglu-p"><br></div>
            <router-link :to="'register'" class="new-user ahover">注册新用户?</router-link>
          </div>
          <div class="login-ewm">
          </div>
        </div>
      </div>
    </div>
    <footernav></footernav>
    <recordMsg></recordMsg>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      number: '',//用户名
      password:'',//密码
      autoLoginState:'',//自动登录勾选状态
      imgYzmSrc:'/gpai/register/captchaImage.do',//图片验证码链接
      loginType:'0',//0账号密码登录1手机号登录
      mobile:'',//手机号登录时手机号
      userYzmpic:'',//用户输入的图片验证码
      userYzmmsg:'',//用户输入的短信验证码
      yzmsendState:'0',//0没发送1发送成功
      buttonText:'发送验证码',//发送验证码按钮默认文本
      from:'',//上级页面
    }
  },
  methods:{
      //
      validate(){
          if(!this.number){
            alert('请输入用户名或手机号')
          }else if(!this.password){
              alert('请输入密码')
          }else{
              this.login()
          }
      },
      //登录方法
      login(){
        const that=this
        var autoLogin='1'
        if(that.autoLoginState){
            autoLogin='1'
        }else{
            autoLogin='0'
        }
        var mobile=that.mobile
        if(!mobile){
            mobile=that.number
        }else{
            mobile=that.mobile
        }
        var data = JSON.stringify({
            loginType:that.loginType,
            mobile: mobile,
            pwd:that.password,
            smsVerifyCode:that.userYzmmsg,
            AutoLogin:autoLogin
        })
        var postData = that.$qs.stringify({
                info: data
        })
        that.$http({
                url: '/gpai/login/login.do',
                method: 'post',
                data: postData
        })
        .then(function(res) {
            console.log(res)
            if(res.data.code=='0000'){
                localStorage.userId=res.data.data.user.id
                localStorage.mobile=res.data.data.user.mobile
                localStorage.name=res.data.data.user.name
                localStorage.userStatus=res.data.data.user.userStatus
                localStorage.ut=res.data.data.ut
                localStorage.nickname=res.data.data.user.nickName
                localStorage.address=res.data.data.user.address
                localStorage.idCard=res.data.data.user.idNo
                that.base.setCookie("ut",res.data.data.ut)
                
                if(!sessionStorage.from||sessionStorage.from=='undefined'||sessionStorage.from=='null'){
                    that.$router.push({path: '/sf_index'})
                }else{
                    //从详情页面来
                    if(sessionStorage.from=='detail'){
                        that.$router.push({path: '/detail',query:{id:sessionStorage.detailId}})
                    }
                }
                
            }else{
                alert(res.data.msg)
                console.log('登录失败')
            }
                
        })
        .catch(function(error) {
            console.log(error);
            alert('登录出错')
        })
      },
      //图片验证码刷新
    reloadImgSrc(){
        this.imgYzmSrc='/gpai/register/captchaImage.do?'+Math.random();
    },
    //切换登录类型
    changeType(type){
        if(type=='numLogin'){
            this.loginType=1
        }else if(type=='acountLogin'){
            this.loginType=0
        }
    },
    //点击发送验证码按钮时间
    sendMsgCodeEvent(){
        if(!this.mobile){
            alert('请输入手机号')
        }else if(!(/^1[34578][0-9]{9}$/.test(this.mobile))){
            alert('请输入正确手机号')
        }else if(!this.userYzmpic){
            alert('请输入图形验证码')
        }else{
            this.regPicmsg()
        }
    },
    //验证图片验证码是否正确
    regPicmsg(){
        const that=this
        var data = JSON.stringify({
            verification: that.userYzmpic
        })
        var postData = that.$qs.stringify({
            info: data
        })
        that.$http({
            url: '/gpai/register/checkCaptcha.do',
            method: 'post',
            data: postData
        })
        .then(function(res) {
            console.log(res)
            that.reloadImgSrc()
            if(res.data.code=='0000'){
                that.sendCode()
            }else{
                alert('验证码有误，请重新输入')
            }
                
        })
        .catch(function(error) {
            console.log(error);
            alert(eror.data.msg)
            that.reloadImgSrc()
        })
    },
    //发送验证码接口调用
    sendCode(){
        const that=this
        console.log(that.mobile)
        var data = JSON.stringify({
            mobile: that.mobile
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
    //手机号登录事件
    submit(){
        this.yzmValidate()
    },
    //验证码验证验证码验证
    yzmValidate(){
        var that=this
        var data = JSON.stringify({
            mobile: that.mobile,
            smsVerifyCode:that.userYzmmsg
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
                    that.login()
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
                that.sendCodeState=false
                that.reSendCodeState=true
                that.yzmsendState='1'
                that.buttonText='重新发送'
                clearTimeout(timer)
            } else { 
                time--; 
                that.buttonText=time
            }
        }
  },
  created(){
      this.from=this.$route.query.from
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-cont .login-cont103 dd {
    width: 100%;
    float: left;
    height: 42px;
    line-height: 42px;
    margin-bottom: 16px;
    font-size: 12px;
    color: #6c6c6c;
}
.login-cont .dl-forget {
    float: left;
    margin: -10px 0 -10px 0;
}
.login-cont .dl-forget input {
    vertical-align: text-bottom;
    margin-right: 3px;
}
input[type="file"], input[type="image"], input[type="reset"], input[type="radio"], input[type="checkbox"] {
    width: auto;
}
input[type="radio"], input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
}
label, select, button, input[type="button"], input[type="reset"], input[type="submit"], input[type="radio"], input[type="checkbox"] {
    cursor: pointer;
}
.fr {
    float: right;
}
.login-cont .dl-forget a {
    color: #6c6c6c;
}
a {
    color: #000;
    text-decoration: none;
}
.ahover:hover{
    color:red;
}
.pt7 {
    padding-top: 7px;
}
.ico-shouji {
    background: url(../assets/img/zhuce-sj.jpg) left center no-repeat;
}
.w246 {
    width: 246px;
}
.userinput {
    height: 36px;
    padding: 2px 2px 2px 40px;
    line-height: 36px;
    color: #6c6c6c;
    border: 1px solid #ddd;
}
input, textarea, .uneditable-input {
    margin-left: 0;
}
input, textarea, .uneditable-input {
    width: 206px;
}
label, input, button, select, textarea {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
}
button, input {
    line-height: normal;
}
button, input, select, textarea {
    margin: 0;
    font-size: 100%;
    vertical-align: middle;
}
.ico-left {
    background: url(../assets/img/ico-left.jpg) left center no-repeat;
}
.w150 {
    width: 150px;
}
.userinput {
    height: 36px;
    padding: 2px 2px 2px 40px;
    line-height: 36px;
    color: #6c6c6c;
    border: 1px solid #ddd;
}
input, textarea, .uneditable-input {
    margin-left: 0;
}
input, textarea, .uneditable-input {
    width: 206px;
}
img {
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}
.w290 {
    width: 290px;
}
.btnacive {
    color: #fff;
    background: #df0404;
    cursor: pointer;
}
.button01 {
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    border: 0;
    letter-spacing: 5px;
}
.ico-signal {
    background: url(../assets/img/ico-signal.jpg) left center no-repeat;
}
.w246 {
    width: 246px;
}
.userinput {
    height: 36px;
    padding: 2px 2px 2px 40px;
    line-height: 36px;
    color: #6c6c6c;
    border: 1px solid #ddd;
}
input, textarea, .uneditable-input {
    margin-left: 0;
}
button[disabled], input[disabled] {
    cursor: default;
}
.w290 {
    width: 290px;
}
.button01 {
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    border: 0;
    letter-spacing: 5px;
}
.img{
    vertical-align: middle;
    border: 0;
}
.nav3 {
    width: 100%;
    float: left;
    padding: 22px 0 22px 0;
    border-bottom: 2px solid #D60D17;
    min-width: 1200px;
}
.auto {
    width: 1200px;
    margin: 0 auto;
}
.nav3 .gpai-logo2 {
    width: 231px;
    float: left;
}
.nav3 .nav3-info1 {
    width: 240px;
    float: left;
    font-size: 24px;
    height: 83px;
    line-height: 86px;
    font-weight: bold;
    margin-left: 30px;
    font-family:'微软雅黑';
}
.login-cont {
    width: 100%;
    float: left;
    background: #232323 url(../assets/img/login_bj.jpg) no-repeat left top;
    padding: 30px 0;
    min-width: 1200px;
    min-height: 450px;
}
.login-cont .login-cont1 {
    float: right;
    height: 370px;
}
.login-cont1 {
    width: 294px;
    background: #FFF;
    margin-top: 35px;
    padding: 14px 18px 0 18px;
    position: relative;
}
.login-cont .login-cont101 {
    padding: 15px 0 10px 0;
}
.login-cont .login-cont102 {
    width: 100%;
    float: left;
    height: 32px;
    line-height: 32px;
    background: #f6ce5d;
    color: #6c6c6c;
    font-size: 12px;
    text-align: center;
    margin: 10px 0;
    border: 1px solid #e49600;
}
.login-cont .login-cont103 {
    width: 100%;
    float: left;
}
.login-ewm {
    width: 80px;
    height: 60px;
    background: url(../assets/img/dl_ewm.jpg) no-repeat right;
    float: right;
    position: absolute;
    bottom: 0;
    right: 0;
}
.login-cont .login-cont101 b {
    color: #6c6c6c;
    font-size: 20px;
}
.login-cont .login-cont103 dd {
    width: 100%;
    float: left;
    height: 42px;
    line-height: 42px;
    margin-bottom: 16px;
    font-size: 12px;
    color: #6c6c6c;
}
.new-user {
    font-size: 12px;
    color: #6c6c6c;
    float: left;
}
.login-cont .dl-forget {
    float: left;
    margin: -10px 0 -10px 0;
}
.login-cont .dl-submit {
    margin-bottom: 18px!important;
    margin-top: -14px;
}
.login-cont .login-cont103 dd .dl-user, .login-cont .login-cont103 dd .dl-password {
    width: 290px;
    height: 42px;
    line-height: 42px;
    float: left;
    text-indent: 13px;
    color: #6c6c6c;
}
.login-cont .dl-forget input {
    vertical-align: text-bottom;
    margin-right: 3px;
}
.fr {
    float: right;
}
.login-cont .dl-forget a {
    color: #6c6c6c;
}
.login-cont .dl-forget a:hover{
  color:red;
}
.login-cont .dl-submit input {
    width: 100%;
    float: left;
    height: 44px;
    line-height: 44px;
    background: #d80d19;
    color: #FFF;
    font-size: 14px;
    border: 0;
    letter-spacing: 5px;
}
.red {
    color: #d80d19;
}
.login-cont .dl-forget input {
    vertical-align: middle;
    margin-right: 3px;
}

</style>
