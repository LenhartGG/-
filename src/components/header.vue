<template>
  <!-- <div class="headerNav">
    <div class="shortcut">
        <div class="w">
            <div class="shortcut-left fl">
                <ul>
                    <li><a href="#">公拍网</a><span>|</span></li>
                    <li><a href="/sf_index">司法拍卖</a><span>|</span></li>
                    <li><a href="#">司法变卖</a><span>|</span></li>
                    <li><a href="#">资产拍卖 <img src="../assets/img/new.png"></a><span>|</span></li>
                    <li><a href="#">新疆分站</a><span>|</span></li>
                </ul>
            </div>
            <div class="shortcut-right fr">
                <ul>
                    <li><router-link to="./login">登录</router-link><span>|</span></li>
                    <li><router-link to="./register">注册</router-link><span>|</span></li>
                    <li><a href="#">我的公拍网 <i></i></a><span>|</span></li>
                    <li><a href="#">微博 <i></i></a><span>|</span></li>
                    <li><a href="#">微信 <i></i></a><span>|</span></li>
                    <li><a href="#">手机站</a></li>
                </ul>
            </div>
        </div>
    </div>
  </div> -->
<div class="header">
	<div class="auto">
        <div class="top-left fl">
            <a href="http://www.gpai.net/">公拍网</a><span class="xian">|</span>
            <router-link to="/sf_index">司法拍卖</router-link><span class="xian">|</span>
            <a href="http://www.gpai.net/bm/">司法变卖</a><span class="xian">|</span>
            <a href="http://www.gpai.net/zc/">资产拍卖 <img src="../assets/img/new.png" height="13" border="0" alt=""></a><span class="xian">|</span>
            <a href="http://xj.gpai.net">新疆分站</a>
            <span class="xian">|</span>
        </div>
        <div class="top-right fr">
            <router-link v-show="!loginState" to="/login">登录</router-link><a>&nbsp;&nbsp;</a>
            <router-link v-show="!loginState" to="/register">注册</router-link>
            <a href="javascript:void(0)">{{userName}}&nbsp;</a>
            <a href="javascript:void(0)" v-show="loginState" v-on:click="signOut()">退出登录</a>
            <span class="xian" v-show="loginState">|</span>
            <router-link v-show="loginState" to="/user">我的公拍网<i></i></router-link><span class="xian">|</span>
            <router-link v-show="!loginState" to="/login">我的公拍网<i></i></router-link><span class="xian">|</span>
            <a href="#">微博<i></i></a><span class="xian">|</span>
            <a href="#">微信<i></i>
                <div class="top-down down-ewm">
                    <img src="../assets/img/ewm.png" alt="">
                </div>
            </a>
            <span class="xian">|</span>
            <a href="http://m.gpai.net/">手机站<i></i></a>
        </div>
	</div>
</div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
      loginState: false,
      userName:''
    }
  },
  methods:{
      changeState(){
          var that=this
          if(localStorage.userId){
              that.loginState=true
              if(localStorage.name=='undefined'||localStorage.name=='null'){                
                  that.userName=localStorage.mobile
              }else{
                  that.userName=localStorage.name
              }
          }else{
              that.loginState=false
          }
      },
      signOut(){
          var that=this
          var data = JSON.stringify({
            ut: localStorage.ut
        })
        var postData = that.$qs.stringify({
                info: data
        })
        that.$http({
                url: '/gpai/login/exit.do',
                method: 'post',
                data: postData
        })
        .then(function(res) {
            console.log(res)
            if(res.data.code=='0000'){
                localStorage.clear()
                that.base.delCookie("ut")
                that.$router.push({path: '/login'})
            }else{
                console.log('退出登录失败')
                alert(res.data.msg)
            }
                
        })
        .catch(function(error) {
            console.log(error);
            alert('退出登录出错')
        })
          
      }
  },
  created(){
      this.changeState()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{width:100%;min-width:1200px;height:40px;line-height:40px;font-size:13px;background:#363940;color:#FFF;}
.header .top-left{width:495px;}
.header .top-left a{color:#FFF;float:left;}
.header .top-left img{display:inline;}
.header span.xian{float:left;padding:0 10px;}
.header .top-left a:hover,.header .top-left a.selected{color:#d80d19;}
.header .top-right {color:#FFF;}
.header .top-right a{float:left;color:#FFF;position:relative;}
.header .top-right i{width:11px;height:40px;line-height:40px;float:right;background:url(../assets/img/xia.png) no-repeat center;}
.header  .top-down{position:absolute;top:40px;z-index:111;display:none;}
.header .down-ewm{width:90px;height:90px;left:-50px;border:1px solid #FFF;background:#363940;text-align:center;}
.header .down-ewm img{margin-top:7px;}
.header a:hover .top-down{display:block;}
.auto {
    width: 1200px;
    margin: 0 auto;
}
</style>
