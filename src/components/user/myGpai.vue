<template>
    <div class="w">
        <div class="usernav">
            <a href="/">首页</a>
            >
            <a href="/user/">我的公拍网</a>
        </div>
        <!-- my_gpai start -->
        <div class="my_gpai clearfloat">
            <!-- 左侧边栏 start -->
            <div class="sidebar">
                <div class="meb-welcome clearfloat">
                    <div class="meb-welcome1">
                        <img v-show="userStatus=='1'" src="../../assets/img/meb_pic0.jpg" alt="">
                        <img v-show="userStatus=='0'" src="../../assets/img/meb_pic1.jpg" alt="">
                    </div>
                    <div class="meb-welcome2">
                        欢迎回来<br>
                        <font class="user"></font>
                    </div>
                </div>
                <!-- user-left start -->
                <div class="user-left">
                    <dl>
                        <dt><span class="user-left-img2"><img src="../../assets/img/img_10.png"></span>我的交易</dt>
                        <dd class="user-left-on">
                            <a href="javascript:void(0)" @click="toggleTabs(userAuction)">我的拍卖会</a>
                        </dd>

                        <dd><a href="javascript:void(0)" @click="toggleTabs(useritemlist)">我的拍品</a></dd>

                    </dl>
                    <dl>
                        <dt><span class="user-left-img2"><img src="../../assets/img/img_10.png"></span>司法频道</dt>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(usersf)">我的司法委托拍卖</a></dd>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(userbid)">我的法院自主拍卖</a></dd>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(userbm)">我的司法变卖</a></dd>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(userfav)">我的收藏</a></dd>
                    </dl>

                    <dl>
                        <dt><span class="user-left-img2"><img src="../../assets/img/img_10.png"></span>资产频道</dt>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(userzc)">我的资产拍卖</a></dd>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(winitem2)">我的网上结算</a></dd>
                    </dl>


                    <dl>
                        <dt><span class="user-left-img2"><img src="../../assets/img/img_10.png"></span>资料管理</dt>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(userinfo)">我的注册信息</a></dd>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(realname)">我的实名认证
                            <span v-show="userStatus=='1'">未完成</span>
                            <span v-show="userStatus=='0'">已完成</span>
                        </a></dd>


                        <dd><a href="javascript:void(0)" @click="toggleTabs(usermobile)">已绑定的手机</a></dd>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(paylist)">网上支付明细</a></dd>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(userpwdchg)">密码修改</a></dd>
                    </dl>

                    <dl>
                        <dt><span class="user-left-img2"><img src="../../assets/img/img_10.png"></span>消息管理</dt>
                        <dd><a href="javascript:void(0)" @click="toggleTabs(msgList)">我的留言</a></dd>
                    </dl>

                    <dl>
                        <dt><span class="user-left-img2"><img src="../../assets/img/img_10.png"></span>服务中心</dt>
                        <dd><a href="/sf/help.do?">联系客服</a></dd>

                        <dd title=""><a href="">退出登录</a></dd>
                    </dl>
                </div>
                <!-- user-left end -->
            </div>
            <!-- 左侧边栏 end -->
            <!-- 中心 start -->
            <div class="middle">
                <userAuction v-on:ievent="sendData" v-on:setAuthState="getAuthState"  v-show="realnameshow" :is="currentView" keep-alive></userAuction>
                <realname2  v-show="!realnameshow"></realname2>
            </div>
            <!-- 中心 end -->
            <!-- 右侧边栏 start -->
            <div class="right">
                <b class="right_b">帮助:</b>
                <li><a href="">实名认证规则</a></li>
                <li><a href="">什么是在线拍+同步拍</a></li>
                <li><a href="">如何报名缴纳保证金</a></li>
                <li><a href="">什么是保留价</a></li>
                <li><a href="">如何办理标的交割</a></li>
                <span class="fr right_b_more"><a href="">更多帮助</a></span>
            </div>
            <!-- 右侧边栏 end -->
        </div>
        <!-- my_gpai end -->
    </div>
</template>

<script>
import userAuction from './userMiddle/userAuction.vue'
import useritemlist from './userMiddle/useritemlist.vue'
import usersf from './userMiddle/usersf.vue'
import userbid from './userMiddle/userbid.vue'
import userbm from './userMiddle/userbm.vue'
import userfav from './userMiddle/userfav.vue'
import userzc from './userMiddle/userzc.vue'
import winitem2 from './userMiddle/winitem2.vue'
import userinfo from './userMiddle/userinfo.vue'
import realname from './userMiddle/realname.vue'
import realname2 from './userMiddle/realname2.vue'
import usermobile from './userMiddle/usermobile.vue'
import paylist from './userMiddle/paylist.vue'
import userpwdchg from './userMiddle/userpwdchg.vue'
import msgList from './userMiddle/msgList.vue'
import '../../assets/img/meb_pic0.jpg'
import '../../assets/img/meb_pic1.jpg'
// import func from './vue-temp/vue-editor-bridge';
export default {
    data(){
        return{
            userAuction:'userAuction',
            useritemlist:'useritemlist',
            usersf:'usersf',
            userbid:'userbid',
            userbm:'userbm',
            userfav:'userfav',
            userzc:'userzc',
            winitem2:'winitem2',
            userinfo:'userinfo',
            realname:'realname',
            realname2:'realname2',
            usermobile:'usermobile',
            paylist:'paylist',
            userpwdchg:'userpwdchg',
            msgList:'msgList',
            currentView:'userAuction',//默认显示的组件
            realnameshow:true,
            userStatus:'1',
        }
    },
    components:{
        userAuction,
        useritemlist,
        usersf,
        userbid,
        userbm,
        userfav,
        userzc,
        winitem2,
        userinfo,
        realname,
        realname2,
        usermobile,
        paylist,
        userpwdchg,
        msgList
    },
    methods:{
        toggleTabs (tabText) {
            this.currentView = tabText;
        },
        sendData(data) {
            console.log(data)
            this.realnameshow=data
            
        },
        defultShow(type){
            if(type&&type=='auth'){
                this.currentView='realname'
            }
            
        },
        getAuthState(data){
            this.userStatus=data
            alert(data)
        }

    },
    created(){
        var type=this.$route.query.type
        this.defultShow(type)
        this.userStatus=localStorage.userStatus
        // var type=this.$route.query.type
        // this.showAuth(type)
    }
}
</script>

<style lang="less">
.usernav{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #363940;
}
.user-left dd span {
    color: #c8000b;
}
.my_gpai{
    width: 100%;
    margin-top: 12px;
    .sidebar{
        float: left;
        width: 197px;
        .meb-welcome{
            width: 100%;
            .meb-welcome1{
                width: 110px;
                float: left;
            }
            .meb-welcome2{
                width: 70px;
                float: left;
                margin-left: 12px;
                margin-top: 15px;
                font-size: 14px;
                color: #363940;
                line-height: 20px;
                font-family: "微软雅黑";
            }
        }
        .user-left{
            width: 197px;
            border: 1px solid #ccc;
            dl{
                margin-bottom: 20px;
                dt{
                    font-size: 18px;
                    height: 35px;
                    line-height: 35px;
                    text-align: center;
                    background: #c8000b;
                    color: #ffffff;
                    .user-left-img2{
                        float: right;
                        margin-right: 20px;
                    }
                }
                dd{
                    font-size: 14px;
                    height: 37px;
                    line-height: 37px;
                    text-indent: 50px;
                    a{
                        height: 37px;
                        display: block;
                        border-left: 2px solid #f5f5f5;
                    }
                    a:hover{
                        border-left: 2px solid #c8000b;
                        background: #fff;
                        color: #c8000b;
                    }
                    .router-link-active {
                        border-left: 2px solid #c8000b;
                        background: #fff;
                        color: #c8000b;
                    }
                }

            }
        }
    }
    .middle{
        float: left;
        width: 705px;
        margin-left: 20px;
    }
    .right{
        width: 230px;
        padding: 15px;
        border: 1px solid #CCC;
        float: right;
        font-size: 14px;
        .right_b {
            font-weight: bold;
            margin-bottom: 10px;
            float: left;
        }
        li {
            width: 100%;
            float: left;
            height: 30px;
            line-height: 30px;
            overflow: hidden;
            a {
                font-size: 14px;
                color: #464646;
            }
        }
        .right_b_more {
            margin-top: 15px;
            font-size: 12px;
        }
    }
}
</style>
