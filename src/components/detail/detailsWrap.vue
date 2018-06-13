<template>
    <div class="block-wrap details-wrap">
        <div class="w">
            <!-- 全部 > 拍卖详情 在线留言 客服专线-->
            <div class="b-breadcrumb clearfloat">
                <div class="fr online-help">
                    <a href="/user/message.do?Web_Item_ID=16351"><i class="online-h1"></i>在线留言</a>
                    <a href=""><i class="online-h2"></i>客服专线 400-820-3720</a>
                </div>
                <a href="javascript:;">全部</a>
                <span>&gt;</span>
                <a href="court.do?id=2557">{{court}}</a>
                <span>&gt;</span>
                拍品详情
            </div>
            <!-- 竞拍详情 -->
            <div class="details-top clearfix">
                <!-- 竞拍右侧边栏 -->
                <div class="details-side fr">
                    <!-- 竞买帮助 -->
                    <div class="side-block">
                        <div class="titlebar">
                            <a href="help.do" class="a-more">更多</a>
                            <b class="tit">竞买帮助</b>
                        </div>
                        <div class="side-block-bd">
                            <ul class="help-list">
                                <li><a href="help.do?Action=n-rule2">保证金规则</a></li>
                                <li><a href="help.do?Action=n-rule3">竞价规则</a></li>
                                <li><a href="help.do?Action=n-rule4">成交规则</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- 设置提醒 -->
                    <div class="side-block">
                        <div class="side-block-bd">
                            <div class="aq-list">
                                <li>
                                    <a v-show="txStatus=='0'" v-on:click="setTips()" href="javascript:void(0);"><i class="aq-h1"></i>&nbsp;
                                    <span class="pl20">设置提醒</span>
                                    </a>
                                    <a v-show="txStatus=='1'" href="javascript:void(0);"><i class="aq-h1"></i>&nbsp;
                                    <span class="pl20">已提醒</span>
                                    </a>
                                </li>
                                <li><a href="/user/message.do?Web_Item_ID=16351"><i class="aq-h2"></i>&nbsp;<span class="pl20">咨询建议</span></a></li>
                            </div>
                        </div>
                    </div>
                    <!-- 微信 -->
                    <div class="side-block">
                        <div class="side-block-bd al-c">
                            <img src="../../assets/img/qr-code.jpg" alt="">
                        </div>
                    </div>
                </div>
                <!-- 竞拍中心 -->
                <div class="details-main">
                    <div class="d-m-pics">
                        <div class="badges-group">
                            
                        </div>

                        <div class="big-img">
                            <img v-bind:src="showPic">
                        </div>
                        <ul class="small-pics clearfix">
                            <li v-for="(value, key, index) of picUrl" :key="index" v-on:click="showBigPic(value)">
                                <a href="javascript:void(0)" rel="zoom1" v-bind:rev="value">
                                <img v-bind:src="value">
                                </a>
                            </li>
                        </ul>
                        <div class="peoples-infos">
                            <span><b>{{bmno}}</b>人报名</span> |
                            <span><b>{{txno}}</b>人设置提醒</span> |
                            <span><b>{{wgno}}</b>人围观</span>
                        </div>
                    </div>
                    <div class="d-m-infos">
                        <div class="plr20">
                            <div class="d-m-title"><b>{{auctionName}}</b></div>
                        </div>
                        <div id="ItemArea">	
                            <div class="plr20">
                                <div class="d-m-time">
                                    <a v-show="txStatus=='1'" href="javascript:void(0)">
                                        <span style="width:50px;" class="fr clock-icon">已提醒</span>
                                    </a>
                                    <a v-show="txStatus=='0'" v-on:click="setTips()" href="javascript:void(0)">
                                        <span  class="fr clock-icon">提醒</span>
                                    </a>
                                    <span v-show="auctionStatus=='0'" class="fl time-txt">即将开始</span>
                                    <span v-show="auctionStatus=='1'" class="fl time-txt">正在拍卖</span>
                                    <span v-show="auctionStatus=='2'" class="fl time-txt">已结束</span>
                                    <span v-show="auctionStatus=='3'" class="fl time-txt">已结束</span>
                                    <span v-show="auctionStatus=='4'" class="fl time-txt">已结束</span>
                                    <label v-show="auctionStatus=='0'">距开始：</label>
                                    <label v-show="auctionStatus=='1'">距结束：</label>
                                    <label v-show="auctionStatus=='2'">成交</label>
                                    <label v-show="auctionStatus=='3'">流拍</label>
                                    <label v-show="auctionStatus=='4'">撤拍</label>
                                    <span v-show="day<1&&auctionStatus<2" id="ItemSecondCount"  class="SecondCount"><b class="Item">{{hours}}</b>时<b class="Item">{{minute}}</b>分<b class="Item">{{second}}.{{ms}}</b>秒</span>
                                    <span v-show="day>=1&&auctionStatus<2" id="ItemSecondCount"  class="SecondCount"><b class="Item">{{day}}</b>天<b class="Item">{{hours}}</b>时<b class="Item">{{minute}}</b>分<b class="Item">{{second}}.{{ms}}</b>秒</span>
                                    <span v-show="auctionStatus=='2'" id="ItemSecondCount"  class="SecondCount"><b class="Item">成交</b></span>
                                    <span v-show="auctionStatus=='3'" id="ItemSecondCount"  class="SecondCount"><b class="Item">流拍</b></span>
                                    <span v-show="auctionStatus=='4'" id="ItemSecondCount"  class="SecondCount"><b class="Item">撤拍</b></span>
                                </div>
                                <div v-show="total==0" class="d-m-price" id="ItemPriceLine">
                                    <p><span>起拍价：</span>
                                        <b class="price-red">{{evaluationPrice/100}}</b>
                                        <span class="price-red">元</span>
                                    </p>
                                </div>
                                <div v-show="total>0&&auctionStatus=='2'" class="d-m-price" id="ItemPriceLine">
                                    <p><span>成交价：</span>
                                        <b class="price-red">{{lastPrice/100}}</b>
                                        <span class="price-red">元</span>
                                    </p>
                                </div>
                                <div v-show="total>0&&auctionStatus=='1'" class="d-m-price" id="ItemPriceLine">
                                    <p><span>当前价：</span>
                                        <b class="price-red">{{lastPrice/100}}</b>  
                                        <span class="price-red">元</span>
                                        <span class="buyerCode" v-show="auctionStatus=='1'">当前领先：{{lastAttendno}}号</span>
                                    </p>
                                </div>
                            </div>
                            <div class="d-m-block" v-show="auctionStatus=='1'||auctionStatus=='0'">
                                <div class="d-m-tips fl">
                                    <div class="xq-chujia">
                                        <div class="xq-chujia1" v-show="auctionStatus=='1'">出  价</div>
                                        <div class="xq-chujia2">
                                            <div class="xq-chujia201">
                                                <div class="i_box" v-show="auctionStatus=='1'">
                                                    <input v-show="lastPrice2" type="text" name="Bid_Price" id="Bid_Price" v-bind:value="lastPrice2/100" class="J_input" readonly="">
                                                    <input v-show="!lastPrice2" type="text" name="Bid_Price" id="Bid_Price" v-bind:value="lastPrice/100" class="J_input" readonly="">
                                                    <button type="button" v-on:click="addsubPrice('add')" class="btnpricechg">+</button>
                                                    <button type="button" v-on:click="addsubPrice('sub')" class="btnpricechg mt3">-</button>
                                                </div> 
                                            </div>
                                            <div class="xq-chujia202">
                                                <button v-show="!ut" v-on:click="login()" type="button" class="btnjoin2">参拍请先登录</button>
                                                <button v-show="!attendNo&&ut" v-on:click="payBond()" type="button" class="btnjoin2">申请参拍及支付保证金</button>
                                                <button v-show="attendNo&&ut" v-on:click="bidPrice()" type="button" class="btnjoin2">出价</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-m-block" v-show="auctionStatus=='2'||auctionStatus=='3'||auctionStatus=='4'">
                                <div class="d-m-tips fl">
                                
                                <div class="d-m-tips fl">
                                    <a href="" v-show="auctionStatus=='2'">感谢您对本次拍卖的关注</a>
                                    <a href="" v-show="auctionStatus=='3'">录入信息有误，撤回重新发布</a>
                                    <p v-show="auctionStatus=='3'">保证金将于三个工作日内退还，感谢您对本次拍卖的关注。</p>
                                    <a href="" v-show="auctionStatus=='4'">感谢您对本次拍卖的关注</a>
                                </div>
                                
                                </div>
                                <span class="d-m-tel fr">
                                    标的咨询电话
                                    <i>{{contentNumber}}</i>
                                </span>
                            </div>
                        </div>
                        <!-- ItemArea  -->
                        <div class="plr20">
                            <div class="d-m-tb">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>当前拍卖模式：{{auctionType}}</td>
                                            <td v-show="auctionTimes=='1'">拍卖次数：第一次拍卖</td>
                                            <td v-show="auctionTimes=='2'">拍卖次数：第二次拍卖</td>
                                            <td v-show="auctionTimes=='3'">拍卖次数：第三次拍卖</td>
                                            <td v-show="auctionMode=='1'">拍卖方式：按总价拍卖</td>
                                            <td v-show="auctionMode=='2'">拍卖方式：按单价拍卖</td>
                                        </tr>
                                        <tr>
                                            <td>在线拍周期：{{auctionCycle}} 小时</td>
                                            
                                            <td>延时周期：{{delayedCycle}} 分钟</td>
                                            <td>加价幅度：<span id="Price_Step">{{priceIncrease/100}}元</span></td>
                                        </tr>
                                        <tr>
                                            <td>起拍价：<span id="Price_Start">{{evaluationPrice/100}}</span>元</td>
                                            <td>保证金：{{bond/100}} 元</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>评估价：{{assessmentPrice/100}} 元</td>
                                            <td>数量/单位：{{amont}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="d-m-table"></div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td v-show="attendNo" title="0_0">我的出价权限：有</td>
                                            <td v-show="!attendNo" title="0_0">我的出价权限：无</td>
                                            <td>我的号牌：<span id="My_Buyer_Code">{{attendNo}}</span>号</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="d-m-table"></div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td nowrap="" class="pr7">处置法院：{{court}}</td>
                                            <td>优先购买权人：{{priority}}</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">联系人：{{contacts}}</td>
                                            <td colspan="2">联系电话：{{contentNumber}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 竞拍流程 -->
            <BlockArticle></BlockArticle>
            <!-- 竞买公告等 -->
            <div class="details-con" style="background:#fff">
                <div class="tab-list" v-bind:class="{ menufixed: ismenufixed}" ref="head">
                    <ul class="clearfix">
                        <li v-bind:class="showTab=='0'?'cur':''"  index="0" v-on:click="changeStyle($event)"><a href="#menuid1">竞买公告</a></li>
                        <li v-bind:class="showTab=='1'?'cur':''" index="1" v-on:click="changeStyle($event)"><a href="#menuid2">竞买须知</a></li>
                        <li v-bind:class="showTab=='2'?'cur':''" index="2" v-on:click="changeStyle($event)"><a href="#menuid3">标的物介绍</a></li>
                        <li v-bind:class="showTab=='3'?'cur':''" index="3" v-on:click="changeStyle($event)"><a href="#menuid4">竞买记录 （<span class="red" id="html_Bid_Shu">{{total}}</span>）</a></li>
                    </ul>
                </div>
                <div class="tab-list-con">
                    <div class="panel-con">
                        <div class="d-title"><span>重要提示</span></div>
                        <div class="d-article d-article2">									
                        1.请竞买人理性参拍，竞拍前请按照《竞买公告》、《竞买须知》等要求，进行实地看样，仔细了解标的物信息，了解竞买资质、委托代理及保证金、成交款支付方式、时间等内容。 <br>
                        2.优先购买权人、以及竞买人欲委托他人竞拍或与他人联合竞拍的，请提前与法院确认，并办理相应的手续，这将作为成交裁定的重要依据。因未提前办理相关手续导致的风险和费用由竞买人自行承担。 <br>
                        3.请仔细阅读标的物详情，再进行竞拍，如有疑问请咨询法院或拍卖辅助机构。 <br>
                        4.负责执行的人民法院、网络服务提供者、拍卖辅助机构的工作人员及其近亲属不得竞买并不得委托他人代为竞买与其行为相关的拍卖财产。<br>
                        <span style="color:red">5.请竞买人留意银联在线支付保证金过程中，本人所持银行卡的支付限额，建议提前1-2天报名交纳保证金，以免错过竞拍时机。查看
                        <a href="help.do?Action=bank">个人网银支付限额列表、</a>
                        <a href="help.do?Action=bankcorp">企业网银支持列表</a>。
                        </span> <br>									
                    </div>	
                    <div>		
                        <a name="menuid1" ref="jmgg" id="menuid1" class="link-item"></a>
                        <div class="d-title"><span>竞买公告</span></div>
                        <div class="d-article">
                            <p>&nbsp;</p>
                            <div v-html="ggnrField"></div>
                        </div>
                        <div class="d-block">
                            <div class="d-block-tit">
                                <span>优先购买权人</span>
                            </div>
                            <div class="d-block-tb">
                                <table>
                                    <tbody><tr><th>顺位<i class="help-icon"></i></th><th>姓名</th></tr>
                                    <tr><td>暂无</td></tr>
                                </tbody></table>
                            </div>
                        </div>

                        <a name="menuid1" ref="jmxz" id="menuid2" class="link-item"></a>
                        <div class="d-title d-title2"><span>竞买须知</span></div>
                        <div class="d-article d-article2">
                            <p>&nbsp;</p>
                            <div v-html="pmxzField"></div>
                        </div>
                        <a name="menuid1" id="menuid3" ref="bdwjs" class="link-item"></a>
                        <div class="d-title d-title2"><span>标的物介绍</span></div>
                        <div class="d-block" v-show="bdmxField">
                            <div class="d-block-tit">
                                <span>具体描述</span>
                            </div>
                            <div class="d-article d-article2">
                                <p></p>
                                <div v-html="bdmxField"></div>
                            </div>
                        </div>
                        <div class="d-block" v-show="zxcdsField||pgbgField">
                            <div class="d-block-tit">
                                <span>相关资料下载</span>
                            </div>
                            <div class="d-block-download">
                                <span class="fl">相关附件下载：</span>
                                <div class="fl">
                                    <p>
                                        <span class="fl"><i class="file-icon4"></i>
                                        <a v-bind:href="zxcdsField" target="_blank">{{zxcdsFieldName}}</a>
                                        </span>
                                        <span class="fl"><i class="file-icon4"></i>
                                        <a v-bind:href="pgbgField" target="_blank">{{pgbgFieldName}}</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="d-block">
                            <div v-show="spField">
                                <div class="d-block-tit">
                                    <span>标的视频介绍</span>
                                </div>
                                <div class="d-article d-article2">
                                    <!-- 标的视频介绍 -->
                                    <video-player  class="video-player vjs-custom-skin"
                                        ref="videoPlayer"
                                        :playsinline="true"
                                        :options="playerOptions"
                                    ></video-player>
                                </div>
                            </div>
                            
                            <div class="clear"></div>

                            <div class="clear"></div>
                            <div class="d-block-tit">
                                <span>标的图片</span>
                            </div>
                            <div class="richtext ItemImgAll">
                                <li v-for="(value, key, index) of picUrl" :key="index">
                                    <a href="javascript:void(0)" rel="zoom1" v-bind:rev="value">
                                        <img v-bind:src="value">
                                    </a>
                                </li>
                            </div>
                        </div>
                        <a name="menuid1" id="menuid4" ref="jmjl" class="link-item"></a>
                        <div class="d-title d-title2"><span>竞买记录</span></div>
                        <div class="d-article d-article2">
                            <!-- 竞买记录 -->
                            <div>
                            <el-table :data="tableData" stripe border  style="width: 100%">
                                <el-table-column prop="attendNo" label="号牌" header-align="center" align="center"></el-table-column>
                                <el-table-column prop="price" label="出价" header-align="center" align="center"></el-table-column>
                                <el-table-column prop="bidTime" label="时间" header-align="center" align="center"></el-table-column>
                                <el-table-column prop="bidType" label="类型" header-align="center" align="center"></el-table-column>
                                <el-table-column prop="bidStatus" label="状态" header-align="center" align="center"></el-table-column>
                            </el-table>
                            <div v-show="total!='0'" class="block paginStyle" align="center">
                                <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="pagesizes"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="total">
                                </el-pagination>
                            </div>
                            </div>
                            <div v-show="auctionStatus=='2'">
                                <a name="menuid1" id="menuid5" class="link-item"></a>
                                <div class="d-title d-title2"><span>竞价成功确认书</span></div>
                                <div class="d-article d-article2">
                                    <p>上海市黄浦区人民法院于2018年5月11日至2018年5月14日在公拍网司法拍卖平台上对“上海市奉贤区洪庙镇唐城街10幢35号202室”进行网络拍卖。</p>
                                    <p>经公开竞价，竞买人程帅，竞买号：H2337以最高应价竞得本拍卖标的，拍卖成交价为：人民币986600元（玖拾捌万陆仟陆佰元整），请按照《竞买公告》、《竞买须知》要求，及时办理拍卖成交余款以及相关手续。</p>
                                    <p>拍卖标的最终成交以上海市黄浦区人民法院法院裁定为准。</p>
                                    <p>拍卖竞价确认时间：2018-05-14 10:43:30</p>
                                </div>
                            </div>												
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlockArticle from './BlockArticle.vue';
import tab from '../tab.vue';
// import '../src/custom-theme.css'
import 'videojs-flash'
import 'videojs-hotkeys'
export default {
  components:{
      BlockArticle,tab
  },
  name: 'detailsWrap',
  data () {
    return {
      picUrl:'',//缩略图地址
      auctionName:'',//标的物名称
      auctionStatus:'0',//拍卖状态
      evaluationPrice:'',//起拍价
      startTime:'',//拍卖开始时间
      endTime:'',//拍卖结束时间
      auctionType:'',//当前拍卖模式
      auctionTimes:'',//拍卖次数
      auctionMode:'',//拍卖方式
      auctionCycle:'',//在线拍周期
      delayedCycle:'',//延时周期
      priceIncrease:'',//加价幅度
      bond:'',//保证金
      assessmentPrice:'',//评估价
      amont:'',//数量/单位
      myAuthority:'无',//我的出价权限
      court:'',//处置法院
      priority:'',//优先购买权人
      contacts:'',//联系人
      contentNumber:'',//联系电话
      attendNo:'',//用户号牌
      bdmxField:'',//标的描述
      showPic:'',//预览图片
      ggnrField:'',//公告内容
      pmxzField:'',//拍卖须知
      bdmxField:'',//标的物介绍
      pgbgField:'',//评估报告
      pgbgFieldName:'',//报告名称
      zxcdsField:'',//执行裁定书
      zxcdsFieldName:'',//裁定书名称
      meetId:'',//拍卖会id
      prodId:'',
      spField:'',//视频资料

      bmno:'',//报名人数
      txno:'',//提醒人数
      wgno:'',//围观人数 
      ut:localStorage.ut,
      ismenufixed:false,//控制详情列表是否固定在浏览器顶部
      offsetTop:'',
      showTab:'0',//竞买公告、竞买须知tab默认显示
      jmggoffsetTop:'',
      jmxzoffsetTop:'',
      bdwjsoffsetTop:'',
      jmjloffsetTop:'',
      falshSrc:'',
      userStatus:'',//实名认证状态
      txStatus:'0',//设置提醒状态0未设置1已设置
      
      playerOptions : {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //url地址
            }],
            poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-6.jpg", //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
            }
        },
        tableData:[],
        currentPage: 1,//默认显示页码
        total:0,//记录总数
        pagesizes:[10,20,30,40,50],
        itemsPerPage:10,//默认每页显条数
        lastPrice:'0',
        bidNo:'',
        lastPrice2:'0',
        lastAttendno:'',
        day:'',
        hours:'',
        minute:'',
        second:'',
        ms:''
    }
  },
  methods:{
    detalInitData(id){
    var that=this
    var data = JSON.stringify({
        id: id,
        userId:localStorage.userId
    })
    var postData = that.$qs.stringify({
        info: data
    })
    that.$http({
        url: '/gpai/product/detail.do',
        method: 'post',
        data: postData
    })
    .then(function(res) {
        console.log(res)
        if(res.data.code=='0000'){
            var data=res.data.data
            that.picUrl=data.picUrl.split(',')//拆分图片url
            that.showPic=data.picUrl.split(',')[0]//设置默认显示大图片
            that.auctionName=data.name
            that.auctionStatus=data.auctionStatus 
            console.log(that.auctionStatus)
            that.evaluationPrice=parseFloat(data.startPrice)
            that.bmno=data.bmno
            that.txno=data.txno
            that.wgno=data.wgno
            that.startTime=data.startTime
            that.endTime=data.endTime
            that.auctionType='网络司法拍卖'
            that.bond=data.margin
            that.auctionTimes=data.data.pmjdField.split("@")[1]
            that.auctionMode=data.data.pmfsField.split("@")[1]
            that.auctionCycle=data.data.pmsxField.split("@")[1]
            that.delayedCycle=data.data.yssxField.split("@")[1]
            that.priceIncrease=parseFloat(data.stepPrice)         
            that.assessmentPrice=data.evaluationPrice
            that.zxcdsField=data.data.zxcdsField.split("@")[1]
            that.zxcdsFieldName=data.data.zxcdsField.split("@")[0]
            that.pgbgField=data.data.pgbgField.split("@")[1]
            that.pgbgFieldName=data.data.pgbgField.split("@")[0]
            that.spField=data.data.spField.split("@")[1]
            that.playerOptions.src=data.data.spField.split("@")[1]
            // that.falshSrc=config="{'clip':"+that.spField+"}"
            that.amont=''
            //that.myAuthority=''//出价权限
            that.court=data.data.fymcField.split("@")[1]
            that.priority=''
            that.contacts=data.data.zxrField.split("@")[1]
            that.contentNumber=data.data.zxrlxfsField.split("@")[1]
            that.bdmxField=data.data.bdmxField.split("@")[1]
            that.ggnrField=data.data.ggnrField.split("@")[1]
            that.pmxzField=data.data.pmxzField.split("@")[1]
            that.attendNo=data.attendNo//号牌
            that.meetId=data.meetId
            that.prodId=data.id
            that.lastPrice=data.startPrice
            that.txStatus=data.txStatus

            //将支付页面所需信息写入缓存
            sessionStorage.auctionName=that.auctionName
            sessionStorage.bond=that.bond
            sessionStorage.court=that.court
            sessionStorage.meetId=that.meetId
            //初始化倒计时
            if(that.auctionStatus=='0'){
                that.countDown(that.startTime)
            }else if(that.auctionStatus=='1'){
                that.countDown(that.endTime)
            }
        }else{
            alert(res.data.code)
        }

    })
    .catch(function(error) {
        alert("详情借口出错")
    })
    },
    //点击缩略图显示大图
    showBigPic(value){
        this.showPic=value
    },
    //保证金支付
    payBond(){
        var that=this
        that.userInfo()
        //that.$router.push({path:'/payBond'})
    },
    //用户信息查询
    userInfo(){
        var that=this
        var data = JSON.stringify({
        })
        var postData = that.$qs.stringify({
                info: data
        })
        that.$http({
                url: '/gpai/login/getUserInfo.do',
                method: 'post',
                data: postData
        })
        .then(function(res) {
            console.log(res)
            if(res.data.code=='0000'){
                console.log('用户信息查询成功')
                that.userStatus=res.data.data.userStatus
                localStorage.mobile=res.data.data.mobile
                localStorage.nickName=res.data.data.nickName
                localStorage.address=res.data.data.address
                localStorage.sex=res.data.data.sex
                localStorage.type=res.data.data.type
                localStorage.bankNo=res.data.data.bankNo
                localStorage.idNo=res.data.data.idNo
                localStorage.userStatus=res.data.data.userStatus

                if(res.data.data.userStatus=='0'){
                    //已认证
                    //that.$router.push({path:'/payBond'})
                    sessionStorage.from='detail'
                    sessionStorage.detailId=localStorage.prodId
                    that.$router.push({ path: '/payBond'})
                }else{
                    alert("您还没有实名认证，请先实名认证")
                    sessionStorage.from='detail'
                    sessionStorage.detailId=localStorage.prodId
                    that.$router.push({path:'/user',query:{type:'auth'}})
                }
            }else{
                alert(res.data.msg)
                
            }
                
        })
        .catch(function(error) {
            console.log(error);
            alert('用户信息查询出错')
        })
    },
    //竞价
    bidPrice(){
        var that=this
        var data = JSON.stringify({
            prodId: localStorage.prodId,
            price:that.lastPrice2,
            userId:localStorage.userId,
            ut:localStorage.ut,
            attendNo:that.attendNo
        })
        var postData = that.$qs.stringify({
                info: data
        })
        that.$http({
                url: '/gpai/bidding/add.do',
                method: 'post',
                data: postData
        })
        .then(function(res) {
            //console.log(res)
            if(res.data.code=='0000'){
                alert('出价成功')
            }else{
                alert(res.data.msg)
            }
                
        })
        .catch(function(error) {
            console.log(error);
            alert('竞价出错')
        })
    },
    //设置提醒
    followPeoples(alertShow){
        var that=this
        var meetId=localStorage.meetId
        if(meetId){
            meetId=localStorage.meetId
        }else{
            meetId="" 
        }
        var data = JSON.stringify({
            userId: localStorage.userId,
            prodId: localStorage.prodId,
            meetId: meetId
        })
        var postData = that.$qs.stringify({
                info: data
        })
        that.$http({
                url: '/gpai/product/count.do',
                method: 'post',
                data: postData
        })
        .then(function(res) {
            console.log(res)
            if(res.data.code=='0000'){
                var data=res.data.data 
                console.log(res)
                that.txno=res.data.data
                if(alertShow!='hide'){
                    that.open('设置提醒成功','提示','确定')
                }
                
            }else if(res.data.code=='9999'){
                alert('您已设置过提醒')
            }
                
        })
        .catch(function(error) {
            console.log(error);
            alert('设置提醒成功出错')
        })
    },
    //设置提醒
    setTips(){
        var that=this
        if(localStorage.mobile){
            //是否登录
            that.followPeoples()
        }else{
            alert('设置提醒请先登录')
            sessionStorage.from='detail'
            sessionStorage.detailId=localStorage.prodId
            that.$router.push({ path: '/login'})
        }
        
    },
    //价格加减
    addsubPrice(type){
        if(type=='add'){
            this.lastPrice2=this.accAdd(this.lastPrice2,this.priceIncrease)
        }else if(type=='sub'){
            //出价价格大于当前价点击减少按钮才能生效
            if(this.lastPrice2>this.lastPrice){
                this.lastPrice2=this.Subtr(this.lastPrice2,this.priceIncrease)
            }   
        }
    },
    accAdd(arg1,arg2){ 
        var c=parseInt(arg1)+parseInt(arg2)
        return c
    },
    Subtr(arg1,arg2){ 
        var c=parseInt(arg1)-parseInt(arg2)
        return c
    },
    
    offsetop(){
        var that=this
        window.addEventListener("scroll", function(event) {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; 
            if(that.offsetTop<scrollTop){
                that.ismenufixed=true
            }else{
                that.ismenufixed=false
            }
            
            if(scrollTop>that.jmggoffsetTop&&scrollTop<that.jmxzoffsetTop){
                that.showTab='0'
            }else if(scrollTop>that.jmxzoffsetTop&&scrollTop<that.bdwjsoffsetTop){
                that.showTab='1'
            }else if(scrollTop>that.bdwjsoffsetTop&&scrollTop<that.jmjloffsetTop){
                that.showTab='2'
            }else if(scrollTop>that.jmjloffsetTop){
                that.showTab='3'
            }else{
                that.showTab='0'
            }
        });
        
    },
    changeStyle(event){
        this.showTab=event.target.parentNode.getAttribute("index")
    },
    //弹框
    open(text,title,btntext) {
        this.$alert(text, title, {
          confirmButtonText: btntext,
          confirmButtonClass:'mainColor',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
      },
      getTabData(currentPage,itemsPerPage){
        var that=this
        var data = JSON.stringify({
            prodId: localStorage.prodId,
            param:"",
            currentPage:currentPage,
            itemsPerPage:itemsPerPage
        })
        var postData = that.$qs.stringify({
            info: data
        })
        that.$http({
            url: '/gpai/bidding/biddingRecord.do',
            method: 'post',
            data: postData 
        })
        .then(function(res) {
            if(res.data.code=='0000'){
                if(res.data.data){
                    that.tableData=res.data.data.listObj
                    that.total=res.data.data.total
                    that.lastPrice=res.data.data.lastPrice
                    that.bidNo=res.data.data.bidNo
                    that.lastAttendno=res.data.data.lastAttendno
                    that.auctionStatus=res.data.data.auctionStatus
                }              
                
            }else{
               console.log('竞价记录查询失败')
            }
                
        })
        .catch(function(error) {
            console.log(error);
            console.log('竞价记录查询出错')
        })
    },
    handleSizeChange(val) {
      var that=this
      //设置每页显示条数
      console.log(`每页 ${val} 条`);
      that.itemsPerPage=val
      that.getTabData(that.currentPage,val)
    },
    handleCurrentChange(val) {
      var that=this
      //选择查看的页码
      console.log(`当前页: ${val}`);
      that.currentPage=val
      that.getTabData(val,that.itemsPerPage)
    },
    login(){
        sessionStorage.from='detail'
        sessionStorage.detailId=localStorage.prodId
        this.$router.push({ path: '/login'})
    },
    //倒计时
    countDown(time){  
        //if(typeof end_time == "string")  
        var end_time = new Date(time).getTime(),//月份是实际月份-1  
        //current_time = new Date().getTime(),  
        sys_second = (end_time-new Date().getTime()); 
        var that=this 
        var timer = setInterval(function(){  
            if (sys_second > 0) {  
                sys_second -= 10;  
                var day = Math.floor((sys_second /1000/ 3600) / 24);  
                var hour = Math.floor((sys_second /1000/ 3600) % 24);  
                var minute = Math.floor((sys_second /1000/ 60) % 60);  
                var second = Math.floor(sys_second/1000 % 60);  
                var haomiao = Math.floor(sys_second/100 % 10);
                that.day=day
                that.hours=hour
                that.minute=minute
                that.second=second
                that.ms=haomiao
            } else {   
                clearInterval(timer);  
            }  
        }, 10);
    }
  },
  created(){
    var id=this.$route.query.id
    localStorage.prodId=id
    this.detalInitData(id)
    this.offsetop()

    var that=this
    that.timer=setInterval(getTotelNumber,2000)
    function getTotelNumber() {
        that.getTabData(that.currentPage,that.itemsPerPage)
    }
    
  },
  destroyed (){
    clearInterval(this.timer)
  },
  mounted(){
       this.offsetTop=this.$refs.head.offsetTop
  },
  updated(){
    this.jmggoffsetTop=this.$refs.jmgg.offsetTop-66
    this.jmxzoffsetTop=this.$refs.jmxz.offsetTop-66
    this.bdwjsoffsetTop=this.$refs.bdwjs.offsetTop-66
    this.jmjloffsetTop=this.$refs.jmjl.offsetTop-66
  },
  watch:{
      lastPrice(curVal,oldVal){
          if(curVal){
              this.lastPrice2=this.accAdd(curVal,this.priceIncrease)             
          }else{
              this.lastPrice2=this.accAdd(this.evaluationPrice,this.priceIncrease)
          }
          
      },

  }
}
</script>

<style scoped lang="less">
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
.d-m-infos .d-m-block .d-m-tel {
    padding-left: 32px;
    line-height: 15px;
    font-size: 15px;
    color: #999;
    width:185px;
}
.d-m-tel {
    background-image: url(../../assets/img/sprites-img-s-3.png);
    background-repeat: no-repeat;
    width: 90px;
    height: 27px;
    background-position: 0px -771px;
}
.fr {
    float: right;
}
.d-m-infos .d-m-block .d-m-tel i {
    font-size: 13px;
    display: block;
}
.xq-chujia {
    width: 460px;
    float: left;
}
.paginStyle{
    margin-top: 20px;
  }
.mainColor{
    background: #d80e19 !important;
}
.video-js .vjs-big-play-button{
    top: 50%;
    left: 50%;
    margin-left: -1.5em;
    margin-top: -1em;
    background-color: rgba(0,0,0,.45);
    font-size: 3.5em;
    height: 2em!important;
    line-height: 2em!important;
    margin-top: -1em!important;
}
.ItemImgAll img {
    max-width: 1000px;
    max-height: 1000px;
}
.ItemImgAll li {
    padding: 10px;
    text-align: center;
}
.red {
    color: #d80d19;
}
.clearfix:before, .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
}
.tab-list.menufixed {
    position: fixed;
    top: 0px;
    left: 50%;
    margin: 0;
    width: 1200px;
    margin-left: -600px;
    z-index: 3;
}
.d-m-infos .d-m-block .d-m-tips a1{font-size: 16px;color: #333;display: block;}
.d-m-infos .d-m-block .d-m-tips p{font-size: 12px;color: #999;padding-top: 5px;}
.d-m-tb{padding: 25px 0;}
.d-m-tb table{width: 100%;}
.d-m-tb table td{font-size: 12px;color:#999;line-height: 22px;}
.d-m-tb table td .down-btn{background: #999;color: #fff;padding: 0 2px;font-size: 10px;}
.d-m-table{border-top:1px solid #ddd;margin-top: 10px;display: block;padding-bottom: 10px;}
.details-side .side-block .share-op{padding: 10px 10px 10px 36px;text-align: center;font-size: 12px;}
.details-side .side-block .share-icon{display: inline-block;*display: inline;*zoom:1;border:1px solid #eee;line-height: 32px;height: 32px;margin-left:35px;padding: 0 20px 0 33px;}
.details-con .tab-list{border:1px solid #ddd;background:#f6f6f6;height: 64px;}
.details-con .tab-list li{float: left;font-size: 18px;padding: 20px 0;position: relative;border-top:2px solid #f6f6f6;}
.details-con .tab-list a{display: inline-block;*display: inline;*zoom:1;padding: 0 45px;border-left: 1px solid #ddd;margin-left: -2px;}
.details-con .tab-list li:first-child a{border-left-color: transparent;}
.details-con .tab-list .cur{border-top:2px solid #d80e19;background: #fff;border-left:1px solid #ddd;border-right:1px solid #ddd;left:-1px;top:-1px;}
.details-con .tab-list .cur a{color: #d80e19;border-left: none;}
.details-con .tab-list-con{background: #fff;border:1px solid #ddd;border-top:0;padding:0 45px 30px;}
.details-con .panel-con{display: none;}
.details-con .panel-con:first-child{display: block;}
.details-con .panel-con .d-title{border-bottom: 2px solid #ccc;text-align: center;margin-bottom: 45px;padding-top: 15px;}
.details-con .panel-con .d-title span{position: relative;top:17px;font-size: 30px;background:#fff;color: #ad0700;display: inline-block;*display: inline;*zoom:1;padding: 0 10px;}
.details-con .panel-con .d-article{color: #111;font-size: 18px;line-height: 32px;padding-bottom: 50px;padding-top: 25px;overflow:hidden}
.details-con .panel-con .d-article p{text-indent: 36px;color: #111;font-size: 18px;line-height: 32px;font-weight: 400;}
.details-con .panel-con .d-article a{color: #666;}
.details-con .panel-con .d-article2 a{color: #3366ff;}
.details-con .panel-con .d-article2 td{border:1px solid #999}
.details-con .panel-con .d-article2 td b{display: inline-block;*display: inline;*zoom:1;position:relative;font-size: 12px;font-family: "宋体";padding:2px;font-weight:100;padding-left:3px;margin-left:7px;line-height:16px;background: #ca2b2f;color: #fff;}

.details-con .al-r{text-align: right;}
.details-con .lk-name{margin-top: 20px;padding-right: 80px;}
.details-con .panel-con .d-block{margin-bottom: 50px;}
.details-con .panel-con .d-block .d-block-tit{font-size: 16px;border-left:2px solid #d92217;background:#f6f6f6;line-height: 32px;padding-left: 15px;}
.details-con .panel-con .d-block .d-block-tb{font-size: 14px;}
.details-con .panel-con .d-block .d-block-tb table{width: 100%;}
.details-con .panel-con .d-block .d-block-tb th{text-align: left;padding:0 10px;line-height: 48px;position: relative;}
.details-con .panel-con .d-block .d-block-tb th:first-child{padding-left: 34px;}
.details-con .panel-con .d-block .d-block-tb .help-icon{display: block;position:absolute;top:50%;right:6px;margin-top:-8px;width:18px;height: 16px;}
.details-con .panel-con .d-block .d-block-tb td{border-top:1px solid #ddd;line-height: 48px;}
.details-con .panel-con .d-block .d-block-tb td:first-child{text-align: center;width: 88px;}
.details-con .panel-con .d-block .d-block-tb td b{display: inline-block;*display: inline;*zoom:1;position:relative;font-size: 12px;font-family: "宋体";padding-right:7px;font-weight:100;padding-left:1px;line-height:16px;background: #ca2b2f;color: #fff;}
.details-con .panel-con .d-block .d-block-tb td b label{font-family: "宋体";background: #9f050d;display: inline;position: absolute;right:0;line-height:16px;margin: 0;}
.details-con .panel-con .d-block .d-block-tb td span{margin: 0 10px;}
.d-block-download{padding: 20px 20px;line-height: 20px;}
.d-block-download *{font-family: "宋体";font-size: 12px;}
.d-block-download [class*="file-icon"]{display: inline-block;*display: inline;*zoom:1;width:18px;height:20px;float: left;margin-right: 2px;}
/*.file-icon1{background: url(../images/file-icon1.png) no-repeat;}*/
/*.file-icon2{background: url(../images/file-icon2.png) no-repeat;}*/
/*.file-icon3{background: url(../images/file-icon3.png) no-repeat;}*/
/*.file-icon4{background: url(../images/file-icon4.png) no-repeat;}*/
.d-block-download a{color: #3366ff;margin-right: 15px;line-height: 20px;display: inline-block;*display: inline;*zoom:1;}
.d-block-download a:hover{text-decoration: underline;}
.block-wrap .b-breadcrumb .online-help a{color: #333;}
.online-help a{font-size: 15px;margin-left: 10px;float: left;}
.online-help [class*="online-h"]{float: left;width:21px;height: 21px;margin-right: 3px;}


.clearfix:after {
    clear: both;
}
.d-m-infos .c-red, .d-m-infos .price-red {
    color: #d80e19;
}
.clock-icon {
    background-image: url(../../assets/img/sprites-img-s-3.png);
    background-repeat: no-repeat;
    width: 30px;
    height: 32px;
    background-position: 0px -916px;
}
.online-h1 {
    background-image: url(../../assets/img/sprites-img-s-3.png);
    background-repeat: no-repeat;
    width: 21px;
    height: 21px;
    background-position: 0px -426px;
}
.online-h2 {
    background-image: url(../../assets/img/sprites-img-s-3.png);
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
.block-wrap * {
    font-family: "微软雅黑";
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
    background-image: url(../../assets/img/sprites-img-s-3.png);
}
/* details-top start */
.details-wrap .details-top {
    background: #fff;
    border: 1px solid #ddd;
}
.details-wrap .details-side {
    border-left: 1px solid #ddd;
    width: 228px;
}
.details-side .side-block {
    padding: 15px 20px 20px;
    border-top: 1px solid #ddd;
}
.details-side .side-block:first-child {
    border-top: 0;
}
.details-side .side-block .titlebar {
    font-size: 15px;
    line-height: 33px;
}
.titlebar .a-more {
    float: right;
    background-color: #fff;
    padding-left: 25px;
    color: #999;
    font-size: 13px;
    line-height: 33px;
    position: relative;
    z-index: 1;
}
.a-more {
    background-image: url(../../assets/img/sprites-img-s-3.png);
    background-repeat: no-repeat;
    width: 51px;
    height: 33px;
    background-position: 0px -968px;
}
.details-side .side-block .titlebar {
    font-size: 15px;
    line-height: 33px;
}
.details-side .side-block .help-list li {
    padding-left: 6px;
}
.details-side .side-block .help-list li {
    background-position: 0px -467px;
    background-repeat: no-repeat;
}
.details-side .side-block .help-list li{
    background-image: url(../../assets/img/sprites-img-s-3.png);
}
.details-side .side-block .aq-list {
    overflow: hidden;
    padding: 10px 0;
}
.details-side .side-block .aq-list li {
    padding-bottom: 10px;
    padding-right: 30px;
    height: 34px;
}
.details-side .side-block .aq-list a {
    float: left;
    background: #f5f5f5;
    padding: 0 6px;
    margin: 0 4px;
    border: 1px solid #ddd;
    font-size: 13px;
    color: #666;
    line-height: 34px;
    width: 130px;
}
.aq-list [class*="aq-h"] {
    float: left;
    width: 18px;
    height: 34px;
    background: url(../../assets/img/aq-icons2.png) no-repeat;
    margin-right: 2px;
}
.aq-list .aq-h1 {
    background-position: 0 50%;
}
.aq-list .aq-h2 {
    background-position: 100% 50%;
}
.pl20 {
    padding-left: 20px;
}
.block-wrap * {
    font-family: "微软雅黑";
}
.details-side .side-block .al-c {
    text-align: center;
}
/* details-main */
.details-wrap .details-main {
    padding: 25px 0 20px 20px;
    margin-right: 229px;
    
}
.details-main .d-m-pics {
    float: left;
    width: 438px;
    position: relative;
}
.details-main .d-m-pics {
    float: left;
    width: 438px;
    position: relative;
}
.badges-group {
    position: absolute;
    top: 5px;
    left: 5px;
}
.details-main .d-m-pics .badges-group {
    position: absolute;
    top: 5px;
    right: 0;
    left: auto;
}
.details-main .d-m-pics .big-img {
    width: 438px;
    height: 294px;
}
.details-main .d-m-pics .big-img img {
    width: 438px;
    height: 294px;
}
.details-main .d-m-pics .small-pics {
    margin: 0 -7px;
    padding-bottom: 14px;
}
.details-main .d-m-pics .small-pics li {
    float: left;
    width: 20%;
    text-align: center;
    margin-top:15px;
}
.details-main .d-m-pics .small-pics img {
    width: 76px;
    height: 50px;
}
.details-main .peoples-infos {
    font-size: 12px;
    color: #ccc;
    margin: 10px -10px;
}
.details-main .peoples-infos span {
    margin: 0 10px;
    font-size: 14px;
    color: #999;
}
.details-main .peoples-infos b {
    font-size: 15px;
    color: #333;
    margin-right: 3px;
}
.details-main .d-m-infos {
    margin-left: 438px;
}
.details-main .d-m-infos .plr20 {
    padding: 0 20px;
}
.d-m-infos .d-m-title {
    font-size: 15px;
    margin-bottom: 20px;
}
.details-main .d-m-infos .plr20 {
    padding: 0 20px;
}
.d-m-infos .d-m-time {
    border: 1px solid #ddd;
    border-left: 0;
    line-height: 32px;
    padding-right: 15px;
}
.d-m-infos .d-m-time span {
    font-size: 15px;
    color: #999;
}
.d-m-infos .d-m-time .clock-icon {
    display: block;
    padding-left: 20px;
}
.d-m-infos .d-m-time .time-txt {
    font-size: 15px;
    color: #ffffff;
    display: block;
    font-weight: 700;
    margin-right: 15px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    height: 34px;
    width: 92px;
    background: #d80e19;
}
.d-m-infos .d-m-time span {
    font-size: 15px;
    color: #999;
}
.d-m-infos .d-m-price {
    font-size: 14px;
    color: #999;
    padding: 15px 0;
}
.d-m-infos .d-m-price {
    font-size: 14px;
    color: #999;
    padding: 15px 0;
}
.d-m-infos .d-m-price b {
    font-size: 30px;
}
.d-m-infos .d-m-price .buyerCode {
    margin-left: 20px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: #1f7acf;
}
.red1{
    color: #df0404;
}
.d-m-infos .d-m-price .buyerCode {
    margin-left: 20px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: #1f7acf;
}
.d-m-infos .d-m-block {
    background: #f5f5f5;
    padding: 20px 20px 15px;
    overflow: hidden;
}
.d-m-infos .d-m-block .d-m-tips {
    width: 240px;
    text-align: center;
}
.xq-chujia .xq-chujia1 {
    width: 62px;
    float: left;
    margin-top: 14px;
}
.xq-chujia .xq-chujia2 {
    width: 398px;
    float: left;
}
.xq-chujia .xq-chujia2 .xq-chujia201 {
    width: 100%;
    float: left;
}
.xq-chujia .i_box {
    font-size: 14px;
    float: left;
}
.xq-chujia .i_box input {
    width: 324px;
    height: 43px;
    line-height: 43x;
    float: left;
    border: 1px solid #CCC;
    text-indent: 13px;
    font-size: 24px;
    font-family: "微软雅黑";
    color: #d80d19;
    margin-right: 10px;
    font-weight: bold;
}
.block-wrap input[type=button], .block-wrap input[type=text], .block-wrap input[type=password] {
    -webkit-appearance: none;
    outline: none;
    border-radius: 0;
}
#ItemArea button {
    float: left;
    border: 0;
    height: 34px;
    line-height: 34px;
    color: #FFF;
    text-align: center;
}
#ItemArea .btnpricechg {
    width: 43px;
    height: 19px;
    line-height: 19px;
    background: #666;
    color: #FFF;
    font-size: 16px;
    border: 1px solid #333;
    float: left;
    margin-bottom: 5px;
}
#ItemArea .btnpricechg {
    width: 43px;
    height: 19px;
    line-height: 19px;
    background: #666;
    color: #FFF;
    font-size: 16px;
    border: 1px solid #333;
    float: left;
    margin-bottom: 5px;
}
.xq-chujia202 {
    width: 100%;
    float: left;
    margin-bottom: 7px;
}
#ItemArea .btnjoin2 {
    width: 340px;
    background: #363940;
    color: #FFF;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
}
#ItemArea .btnjoin2:hover {
    background: #d80d19;
}
.details-main .d-m-infos .plr20 {
    padding: 0 20px;
}
.d-m-tb {
    padding: 25px 0;
}
.d-m-tb table {
    width: 100%;
}
table {
    max-width: 100%;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
}
.d-m-tb table td {
    font-size: 12px;
    color: #999;
    line-height: 22px;
}
.d-m-table {
    border-top: 1px solid #ddd;
    margin-top: 10px;
    display: block;
    padding-bottom: 10px;
}
/* details-top end */
</style>
