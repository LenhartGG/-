<template>
    <div class="meb-ycp" id="Right"> 
			<div class="meb-ycp01">
			人工实名认证（需1个工作日）<span>通过实名认证方可参加拍卖，请提交相关信息</span>
			</div>
			
			<div class="meb-zhuce">
				<div class="meb-zhuce01">
                    <b class="red meb-info01">基本信息<font class="font12">(未认证)</font></b><br>
                    <li><input type="text" id="RealName" name="RealName" placeholder="姓名" value="" class="meb-int1"> 
                    <input type="radio" name="sex">先生 
                    <input type="radio" name="sex">女士</li>
                    <li>
                        <select size="1" name="CardType" id="CardType"><option value="">请选择您的证件</option><option value="1">居民身份证</option><option value="2">中国公民护照</option><option value="3">台湾居民来往大陆通行证</option><option value="4">港澳居民来往内地通行证</option><option value="5">外国公民护照</option><option value="6">户口薄</option><option value="11">军官证</option></select>
                    </li>
                    <li><input type="text" id="idcard" name="idcard" class="meb-int1" placeholder="证件号" value="">当您通过实名认证后此信息无法修改</li>
				</div>

				<div class="meb-zhuce01">
                    <b class="red meb-info01">证件附件</b><br>
                    <p class="meb-sm1">请按照以下图示分别上传身份证件 （文件大小限制单个 2Mb 格式限制：jpg、png、bmp）</p>
                    <table width="100%" cellpadding="0" cellspacing="0" id="meb-sm-table">
                        <tbody>
                            <tr>
                        
                                <td><div id="div_sfz1"  onclick="upImage(1);" class="userchecksfz"></div></td>
                                <td><div id="div_sfz2"  onclick="upImage(2);" class="userchecksfz"></div></td>
                                <td><div id="div_sfz3"  onclick="upImage(3);" class="userchecksfz"></div></td>

                            </tr>
                            <tr class="meb-sm-info2">
                                <td>1.上传身份证件清晰正面照片</td><td>2.上传身份证件清晰反面照片</td><td>3.上传手持身份证件正面照片</td>
                            </tr>
                            <tr class="sm_upload">
                                <td><a href="javascript:upImage(1);">上传</a></td>
                                <td><a href="javascript:upImage(2);">上传</a></td>
                                <td><a href="javascript:upImage(3);">上传</a></td>
                            </tr>
                        </tbody>
                    </table>
				</div>
				<div class="meb-sm-button">
                    <input type="hidden" name="sfz1" id="sfz1" value="">
                    <input type="hidden" name="sfz2" id="sfz2" value="">
                    <input type="hidden" name="sfz3" id="sfz3" value="">
                    <input type="hidden" name="fnID" id="fnID" value="1">
                    <button type="submit" class="w94">提交认证</button>
				</div>
			</div>
			<div class="meb-zhuce03">
				温馨提示：<br>
				<li>人工实名认证需要1个工作日，请尽量使用银行卡实名认证。</li>
				<li>您提交实名信息后，即可选择标的进行参拍报名。</li>
			</div>
			
			
		</div>
</template>

<script>

</script>


<style lang="less" scoped>
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
                .meb-int1 {
                    width: 210px;
                    height: 28px;
                    line-height: 28px;
                    float: left;
                    margin-right: 25px;
                    text-indent: 7px;
                    color: #505257;
                }
                select {
                    width: 213px;
                    height: 32px;
                    margin-right: 18px;
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
.meb-zhuce .font12 {
    font-size: 12px;
    padding-left: 10px;
    font-weight: normal;
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
.red {
    color: #d80d19;
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
.meb-sm1 {
    width: 100%;
    float: left;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    text-indent: 10px;
    color: #505257;
}
.userchecksfz {
    background-size: contain;
    width: 230px;
    height: 150px;
    cursor: pointer;
    float: left;
    text-align: center;
    display: table-cell;
    line-height: 180px;
    font-size: 20px;
    color: #493393;
    font-weight: 900;
    -webkit-text-shadow: #fef 1px 0 0,#fef 0 1px 0,#fef -1px 0 0,#fef 0 -1px 0;
    -moz-text-shadow: #fef 1px 0 0,#fef 0 1px 0,#fef -1px 0 0,#fef 0 -1px 0;
    text-shadow: #fef 1px 0 0, #fef 0 1px 0, #fef -1px 0 0, #fef 0 -1px 0;
}
#meb-sm-table {
    font-size: 12px;
    margin: 22px 0;
    float: left;
    color: #505257;
}
.meb-sm-info2 td {
    padding: 17px 0 15px 0;
}
.sm_upload a {
    float: left;
    width: 60px;
    height: 20px;
    line-height: 20px;
    background: url('../../../assets/img/button_bj1.jpg') repeat-x;
    text-align: center;
    font-size: 12px;
    border: 1px solid #CCC;
}
.meb-sm-button {
    width: 100%;
    float: left;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 25px;
    padding-bottom: 10px;
}
.meb-sm-button button {
    height: 30px;
    line-height: 30px;
    background: url('../../../assets/img/button_bj1.jpg') repeat-x;
    border: 1px solid #CCC;
    outline: 0;
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
#div_sfz1{
    background: url('../../../assets/img/sm_1.jpg') no-repeat;
    background-size: contain;
}
#div_sfz2{
    background: url('../../../assets/img/sm_2.jpg') no-repeat;
    background-size: contain;
}
#div_sfz3{
    background: url('../../../assets/img/sm_3.jpg') no-repeat;
    background-size: contain;
}
</style>
