// xxx.js 组件
exports.install = function(Vue, options) {
    Vue.prototype.base = {
        //公用的ajax调用方法
        //url接口请求地址，data传输的json格式数据
        ajax() {
            // var data = JSON.stringify(data)
            // var postData = Vue.prototype.$qs.stringify({
            //     info: data
            // })
            // Vue.prototype.$qs.$http({
            //     url: url,
            //     method: 'post',
            //     data: postData
            // })
            // .then(function(res) {
            //     console.log(res)
            //     return res
            // })
            // .catch(function(error) {
            //     console.log(error);
            //     return error
            // })
        },
        //这是有设定过期时间的使用示例：setCookie("name","hayden","s20");
        //s20是代表20秒
        //h是指小时，如12小时则是：h12
        //d是天数，30天则：d30
        setCookie(name, value, time) {
            if (time) {
                var strsec = Vue.prototype.base.getsec(time);
                var exp = new Date();
                exp.setTime(exp.getTime() + strsec * 1);
                document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
            } else {
                document.cookie = name + "=" + escape(value);
            }
        },
        getsec(str) {
            var str1 = str.substring(1, str.length) * 1;
            var str2 = str.substring(0, 1);
            if (str2 == "s") {
                return str1 * 1000;
            } else if (str2 == "h") {
                return str1 * 60 * 60 * 1000;
            } else if (str2 == "d") {
                return str1 * 24 * 60 * 60 * 1000;
            }
        },
        //手动删除cookie
        //使用实例delCookie("name");
        delCookie(name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = Vue.prototype.base.getCookie(name);
            if (cval != null) {
                document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
            }

        },
        //获取cookie
        getCookie(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        //显示到顶部
        toTop() {
            window.scrollTo(0, 0);
        },
    }
}