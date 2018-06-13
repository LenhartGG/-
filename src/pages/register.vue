<template>
  <div class="register">
    <headernav></headernav>
    <div class="nav3">
      <div class="auto">
        <div class="gpai-logo2">
          <a href="/"><img class="img" src="../assets/img/sf_logo.png" alt=""></a>
        </div>
        <div class="nav3-info1">用户注册</div>
      </div>
    </div>
    <div class="reg-bor-top">
				<form autocomplete="off">
					<div class="regbox" id="step1" v-show="step1">
						<div class="reg-nav">
							<ul class="reg-step clearfix" style="text-align:center;">
								<li class="current"><i class="icon-1"></i>设置登录名</li>
								<li><i class="icon-2"></i>设置账户信息</li>
								<li class="mr0"><i class="icon-3"></i>注册成功</li>
							</ul>
						</div>
						<div class="reg-nav2">
						<li v-on:click="typeChose($event)" type="0">
							<a href="javascript:void(0)">
								<img v-show="accountType=='0'" src="../assets/img/regTitle_01.png" width="220" height="45" border="0" alt="">
								<img v-show="accountType=='1'" src="../assets/img/regTitle_03.png" width="220" height="45" border="0" alt="">
							</a>
						</li>
						<li v-on:click="typeChose($event)" type="1">
							<a href="javascript:void(0)">
								<img v-show="accountType=='0'" src="../assets/img/regTitle_02.png" width="220" height="45" border="0" alt="">
								<img v-show="accountType=='1'" src="../assets/img/regTitle_04.png" width="220" height="45" border="0" alt="">
							</a>
						</li>						
						</div>
						<div class="reg-main">
							<div class="error-wrap gift-wrap">
								<div class="error-box">
									<!-- <i class="error"></i> -->
									<span>{{welcomeMsg}}</span>
								</div>
							</div>
							<div class="reg-form">
								<div class="reg-txtbox">
									<i class="ico-usename"></i>
									<input v-model.number="number" oninput="if(value.length>11)value=value.slice(0,11)" class="txt-input text-email" type="number" name="mobile" id="mobile" maxlength="11" placeholder="请输入您的手机号码">
                </div>
								<div class="input-tip per-input-tip"></div>
								<div class="reg-code imgCodeDiv">
									<div class="code-txtbox">
										<i class="ico-code"></i>
										<input class="txt-input" v-model="imgYzm" type="text" maxlength="6" name="vCode" id="vCode" placeholder="请输入验证码">
									</div>
									<div class="code-num ">
										<img id="CodeImg" v-on:click="reloadImgSrc()"  v-bind:src="imgYzmSrc">
										<a id="changeImgSrc" v-on:click="reloadImgSrc()" href="javascript:void(0);" class="changecode">换一张</a>
									</div>
								</div>
								<div class="input-tip  per-input-tip"></div>
								<div class="reg-tip">
									<div class="auto-label">
										<input type="checkbox" v-model="checked" id="IsAgree" name="IsAgree">我已阅读并同意
										<a href="/sf/help.do?Action=jon0" target="_blank">《公拍网用户注册协议》</a>
									</div>
								</div>
								<div class="input-tip  per-input-tip"></div>
								<div class="btn-reg">									
									<a class="reg-submit" v-on:click="verifyNumber()" href="javascript:void(0);">下一步</a>
								</div>
							</div>
						</div>
					</div>
					<div class="regbox nodisplay" id="step2" v-show="step2">
						<div class="reg-nav">
							<ul class="reg-step clearfix" style="text-align:center;">
								<li><i class="icon-1"></i>设置登录名</li>
								<li class="current"><i class="icon-2"></i>设置账户信息</li>
								<li class="mr0"><i class="icon-3"></i>注册成功</li>
							</ul>
						</div>
						<div class="reg-main mt50">
							<div class="reg-form">
								<div class="reg-txtbox">
									<i class="ico-usename"></i>
									<input v-bind:value="number" disabled class="txt-input text-email" type="number" name="mobile" id="mobile2" maxlength="11" placeholder="请输入您的手机号码" style="cursor: not-allowed;">
								</div>
								<div class="input-tip per-input-tip"></div>
								<div class="issetgray setgray">
									<div class="reg-code reg-phone-code smsCodeDiv">
										<div class="code-txtbox">
											<i class="ico-code"></i>
											<input v-model="yzm" class="txt-input" id="sCode" oninput="if(value.length>6)value=value.slice(0,6)" type="number" maxlength="6" placeholder="请输入短信验证码">											
										</div>
										<a v-show="sendCodeState" class="btn-get-code btnacive" href="javascript:void(0);" id="Btn_SendCode" name="Preg_index_none_getmobilenew"><span>{{countdown}}</span></a>
										<a v-on:click='sendcode()' v-show="reSendCodeState" class="btn-get-code btnacive sendCode" href="javascript:void(0);" id="Btn_SendCode" name="Preg_index_none_getmobilenew"><span>重新发送</span></a>
									</div>
								</div>
								<div class="input-tip per-input-tip"></div>
								<div class="reg-txtbox">
									<i class="ico-pwd"></i>
									<input v-model="setPasswordOne" class="txt-input text-email password-new" type="password" id="password2" maxlength="20" placeholder="请设置账号密码">
								</div>
								<div class="input-tip per-input-tip"></div>
								<div class="reg-txtbox">
									<i class="ico-pwd"></i>
									<input v-model="setPasswordTwo" class="txt-input text-email password-new" type="password" id="password3" maxlength="20" placeholder="请再输入一次密码">
								</div>
								<div class="input-tip per-input-tip"></div>
								<div class="btn-reg">
									<a v-on:click='postRegister()' href="javascript:void(0);" class="reg-submit" id="step2save" name="Preg_index_none_submit2">提交注册</a>
								</div>
								<div class="input-tip per-input-tip"></div>
								<a href="/sf/help.do?Action=smshelp" class="fs12">收不到短信,请点击这里获取帮助</a>
							</div>
						</div>
					</div>
					<div class="regbox nodisplay" id="step3" v-show="step3">
						<div class="reg-nav">
							<ul class="reg-step clearfix" style="text-align:center;">
								<li><i class="icon-1"></i>设置登录名</li>
								<li><i class="icon-2"></i>设置账户信息</li>
								<li class="current mr0"><i class="icon-3"></i>注册成功</li>
							</ul>
						</div>
						<div class="reg-main mt50">
							<div class="reg-form"></div>
						</div>
					</div>
				</form>
			</div>
    <footernav></footernav>
    <recordMsg></recordMsg>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
		welcomeMsg:'欢迎注册公拍网',
      	step1: true,
      	step2:false,
      	step3:false,
      	number:'',
      	imgYzm:'',//图片验证码
		checked:'',//协议状态
		accountType:'0',//注册账号的类型默认是个人用户0，企业用户1
		imgYzmSrc:'/gpai/register/captchaImage.do',//图片验证码链接
		sendCodeState:true,//验证码发送按钮状态
		reSendCodeState:false,//重新发送验证码按钮状态
		countdown:'获取短信验证码',//倒计时初始值
		yzm:'',//短信验证码
		setPasswordOne:'',//第一次设置的密码
		setPasswordTwo:'',//确认输入的密码
    }
  },
  methods: {
    verifyNumber:function(){
      const val=this.number,imgYzm=this.imgYzm,checked=this.checked
      if(!val){
        alert('请输入手机号')
      }else if(!/^1[34578][0-9]{9}$/.test(val)){
        alert('请输入正确的手机号')
      }else if(!imgYzm){
        alert("请输入验证码")
      }else if(!checked){
        alert('请先同意用户协议')
      }else{
				this.isNumberRegistered()//验证手机号是否已注册
			}
		},
		//注册账户类型选择
		typeChose:function(event){
			console.log(event.currentTarget.type)
			this.accountType=event.currentTarget.type//将选择注册的账号类型设置保存
			if(event.currentTarget.type=='0'){
				this.welcomeMsg='欢迎注册公拍网'
			}else if(event.currentTarget.type=='1'){
				this.welcomeMsg='欢迎注册公拍网企业账户'
			}
		},
		//检查手机号是否已注册
		isNumberRegistered(){
			const that=this
			var data = JSON.stringify({
        mobile: that.number
			})
			var postData = that.$qs.stringify({
					info: data
			})
			that.$http({
					url: '/gpai/register/registered.do',
					method: 'post',
					data: postData
			})
			.then(function(res) {
					console.log(res)
					if(res.data.code=='0000'){
						that.verifyImgcode()
					}else{
						alert(res.data.msg)
						// alert('手机号已被注册')
					}
			})
			.catch(function(error) {
					console.log(error);
					alert('手机号注册接口出错')
			})
		},
		//图片验证码验证
		verifyImgcode(){
			const that=this
			console.log(that.imgYzm)
			var data = JSON.stringify({
        		verification: that.imgYzm
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
					that.step1=false
					that.step2=true
					if(that.step2){
						that.sendcode()
					}
				}else{
					alert(res.data.msg)
				}
					
			})
			.catch(function(error) {
				console.log(error);
				alert(eror.data.msg)
				that.reloadImgSrc()
			})
		},
		//图片验证码刷新
		reloadImgSrc(){
			this.imgYzmSrc='/gpai/register/captchaImage.do?'+Math.random();
		},
		//验证码发送
		sendcode(){
			const that=this
			console.log(that.number)
			var data = JSON.stringify({
        		mobile: that.number
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
						that.sendCodeState=true
						that.reSendCodeState=false
						that.countDown(60)
					}else{
						alert(res.data.msg)
					}
			})
			.catch(function(error) {
					console.log(error);
					alert('验证码发送失败')
			})
		},
		//短信倒计时
		countDown(time){
			var that=this
			var timer=setTimeout(function() { 
				that.countDown(that.countdown) 
			},1000) 
			if (time == 1) { 
					that.sendCodeState=false
					that.reSendCodeState=true
					clearTimeout(timer)
				} else { 
					time--; 
					that.countdown=time
				}
			},
			//提交注册
			postRegister(){
				var that=this
				if(!that.yzm){
					alert('请输入验证码')
				}else if(!that.setPasswordOne){
					alert('请输入密码')
				}else if(!that.setPasswordTwo){
					alert('请确认密码')
				}else{
					that.yzmValidate()
				}
			},
			//验证码验证验证码验证
			yzmValidate(){
				var that=this
				console.log(that.yzm)
				var data = JSON.stringify({
					mobile: that.number,
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
							that.passwordValidate()
						}else{
							alert(res.data.msg)
						}
				})
				.catch(function(error) {
					alert('验证码发送接口出错')
						console.log(error);
				})
			},
			//密码校验
			passwordValidate(){
				var that=this
				if(that.setPasswordOne!=that.setPasswordTwo){
					alert('您两次设置的密码不一致')
				}else if(that.setPasswordOne.length<8){
					alert('设置的密码不能小于8位')
				}else{
					that.register()
				}
			},
			//注册接口
			register(){
				var that=this
				var data = JSON.stringify({
					mobile: that.number,
					pwd:that.setPasswordOne,
					pwd2:that.setPasswordTwo,
					type:that.accountType 
				})
				var postData = that.$qs.stringify({
						info: data
				})
				that.$http({
						url: '/gpai/register/register.do',
						method: 'post',
						data: postData
				})
				.then(function(res) {
						console.log(res)
						if(res.data.code=='0000'){
							alert('注册成功')
							that.login()
							
						}else{
							alert(res.data.msg)
						}
				})
				.catch(function(error) {
					alert('注册接口出错')
						console.log(error);
				})
			},
			//登录方法
			login(){
				const that=this
				var autoLogin='1'
				var data = JSON.stringify({
					loginType:'0',
					mobile: that.number,
					pwd:that.setPasswordOne,
					smsVerifyCode:'',
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
						sessionStorage.from='register'
						that.$router.push({path: '/user'})
					}else{
						alert(res.data.msg)
						console.log('登录失败')
					}
						
				})
				.catch(function(error) {
					console.log(error);
					alert('登录出错')
				})
			}
	},
	created(){
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sendCode{
	background: red;
	color: #fff;
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

.reg-bor-top {width: 990px;margin: 0 auto 0;}
.regbox {float: left;width: 100%;}
.regbox * {font-family: "microsoft yahei";}
.regbox .reg-nav {position: relative;margin: 0 auto;padding-top: 50px;width: 870px;height: 35px;font: 18px "Microsoft YaHei";list-style: none;border-bottom: 1px solid #ccc;}
.regbox .reg-nav .reg-step {margin: 0 auto;width: 478px;color: #666;}
.regbox .reg-nav .reg-step li {position: relative;float: left;padding: 0 15px 0;line-height: 34px;margin-right: 19px;font-size: 18px;font-weight: 400;}
.regbox .reg-nav .reg-step .current {color: #D60D17;line-height: 34px;border-bottom: 2px solid #D60D17;}
.regbox .reg-nav .icon-1,
.regbox .reg-nav .icon-2,
.regbox .reg-nav .icon-3 {position: relative;vertical-align: middle;display: inline-block;bottom: 1px;*bottom: 0;width: 16px;height: 16px;line-height: 16px;margin-right: 4px;background: url(../assets/img/cop-bg.png) no-repeat 0 0;}
.regbox .reg-nav .icon-1 {background-position: -40px 0;}
.regbox .reg-nav .current .icon-1 {background-position: -64px 0;}
.regbox .reg-nav .icon-2 {background-position: -40px -24px;}
.regbox .reg-nav .current .icon-2 {background-position: -64px -24px;}
.regbox .reg-nav .icon-3 {background-position: -40px -48px;}
.regbox .reg-nav .current .icon-3 {background-position: -64px -48px;}

.regbox .reg-nav2 {position: relative;margin: 0 auto;padding-top: 50px;width: 440px;height: 35px;font: 18px "Microsoft YaHei";list-style: none;}
.regbox .reg-nav2 li {float: left;}

.regbox .reg-main {position: relative;margin: 0 auto;width: 440px;height: auto!important;min-height: 560px;_height: 560px;overflow: hidden;padding: 0;}
.regbox .gift-wrap {padding-bottom: 25px;}
.regbox .gift-wrap .error-box {border: 1px solid #D60D17;background-color: #fffff0;color: #D60D17;padding: 7px 0 7px 34px;margin-top: 30px!important;}
/* .regbox .gift-wrap .error-box .error {background: url(../assets/img/giftIcon.png) no-repeat center;top: 9px;} */
.regbox .error-box {border: 1px solid #f55;background-color: #fff0f0;padding: 10px 0 10px 34px;position: relative;width: 404px;font-family: "microsoft yahei";}
.regbox .error-box-wrap {height: 44px;}
.regbox .error {width: 3px;height: 10px;left: 10px;padding: 8px 8px 0 8px;display: block;position: absolute;top: 10px;font-size: 12px;background: url(../assets/img/cop-bg.png) no-repeat 0 0;}
.regbox .error-border {border: 1px solid #f55;}
.regbox .reg-txtbox .text-email {position: relative;background: transparent;}
.regbox .reg-txtbox .switch-to-phone {margin-bottom: 10px;}
.regbox input {font-family: "microsoft yahei";}
.regbox input:focus {box-shadow: none;}
.regbox .reg-txtbox,
.regbox .code-txtbox,
.regbox .code-num {position: relative;height: 38px;border: solid 1px #ddd;background: #fff;}
.regbox .reg-email {right: -540px;position: absolute;width: 100%;}
.regbox .phone-num {left: 0;position: absolute;width: 100%;}
.regbox .reg-main {position: relative;margin: 0 auto;width: 440px;min-height: 460px;_height: 460px;overflow: hidden;padding: 0;}
.regbox .code-num {position: relative;height: 38px;border: solid 1px #eee;border-width: 1px 1px 1px 0;background: #fff;}
.regbox .reg-code .code-num {float: left;_font-size: 0;width: 200px;text-align: center;}
.regbox .code-num img {width: 70px;height: 30px;margin-top: 4px;line-height: 0;}
.regbox .reg-txtbox i,
.regbox .code-txtbox i {display: inline-block;float: left;width: 34px;height: 40px;background: url(../assets/img/input-icon.png) no-repeat;}
.regbox .reg-txtbox .ms-ico,
.regbox .code-txtbox .ms-ico {position: absolute;right: 10px;top: 11px;background: url(../assets/img/cop-bg.png) no-repeat 0 0;width: 16px;height: 16px;display: block;float: right;}
.regbox .reg-txtbox .ms-ico-error {background-position: 0 0;}
.regbox .reg-txtbox .ms-ico-ok,
.regbox .code-txtbox .ms-ico-ok {background-position: -19px 0;}
.regbox .reg-txtbox .ico-usename {background-position: 0 -153px !important;}
.regbox .reg-txtbox .ico-email {background-position: 0 -101px !important;}
.regbox .reg-txtbox .ico-pwd {background-position: 0 -53px !important;}
.regbox .reg-txtbox input,
.regbox .code-txtbox input {float: left;padding: 10px 5px;height: 18px;background: #fff;color: #333;font-size: 14px;font-family: "microsoft yahei";border: 0;}
.regbox .reg-txtbox .txt-input {width: 360px;}
.regbox .reg-code {height: 40px;}
.regbox .code-txtbox {float: left;width: 237px;}
.regbox .code-txtbox .ico-code {background-position: 2px -6px !important;}
.regbox .code-txtbox .ico-pwd {background-position: 0 -48px !important;}
.regbox .code-txtbox .txt-input {width: 148px;}
.regbox .reg-phone-code .code-txtbox {width: 279px;}
.regbox .reg-phone-code .code-num {width: 158px;}
.regbox .reg-phone-code .btn-get-code {float: left;margin: 10px 0 0 0;width: 158px;height: 38px;line-height: 38px;font-size: 14px;text-align: center;border: 1px solid #BBB;border-width: 1px 1px 1px 0;}
.regbox .code-link {float: right;margin: 0 20px 0 0;width: 36px;height: 34px;line-height: 33px;font-size: 12px;font-family: SimSun;}
.regbox .code-link a {color: #2272c8;}
.regbox .code-link a:hover {color: #f60;}
.regbox .changecode {position: relative;left: 30px;color: #2272c8;font-size: 12px;}
.regbox .btn-reg {display: block;margin: 10px 0;text-align: center;font-size: 20px;font-family: "Microsoft YaHei";font-weight: 700;color: #fff;background: #D60D17;text-decoration: none;border-radius: 3px;}
.regbox .btn-reg {width: 100%;}
.regbox .btn-reg a:hover {text-decoration: none;color: #fff;}
.regbox .reg-main .reg-submit {display: block;padding: 10px 0;height: 20px;line-height: 20px;font-size: 20px;font-family: "Microsoft YaHei";font-weight: 700;color: #fff;background: #D60D17;text-decoration: none;cursor: pointer;border-radius: 3px;border: 0;text-align: center;}
.regbox .reg-submit:hover {background: #f00;color:#333}
.regbox .err-msg {margin-top: 10px;padding: 10px;background: #fff0f0;border: solid 1px #f55;}
.regbox .err-msg p {position: relative;margin-left: 20px;}
.regbox .err-msg p i {position: absolute;left: -20px;top: 1px;}
.regbox .input-label {position: absolute;left: 40px;top: 9px;font-size: 14px;font-family: "microsoft yahei";color: #999;background: transparent;cursor: text;}
.regbox .per-input-tip {font-size: 12px;color: #999;height: 30px;line-height: 30px;}
.regbox .reg-tip {position: relative;height: 16px;line-height: 16px;color: #666;font-size: 12px;}
.regbox .reg-tip a {cursor: pointer;color: #08C;}
.regbox .auto-label input {float: left;margin-right: 2px;margin-top: 2px;margin-top: 2px\0;*margin-top: -1px;*margin-left: -4px;_margin-top: -3px;}
.regbox .reg-phone-code .btn-get-code {margin: 0;}
.regbox .mt50 {margin-top: 50px;}
</style>
