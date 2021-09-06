const apiUrl={
    acca:'https://accahelper.zbgedu.com',
	zbg:'https://m.zbgedu.com',
    api:'https://api.zbgedu.com'

}
// 设置cookie   
function setCookie(name,value,Days=0.4){
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
// 获取cookie
function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
//获取url参数
function getQueryName(name){
    var query = window.location.search.substring(1);
    var vars = query.split('&')
    for(var i= 0;i<vars.length;i++){
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false
}
//判断为是否为安卓
function isAndroid(){
	let ua = navigator.userAgent
	return ua.indexOf("Android")>-1
}
// 添加若提示
function tipsBox ( option ) {
    option.time = option.time?option.time:1500
    var html = '';
    if ( option.type=='suc'||option.type=='fail') {
        html += '<div class="dialog-bg tip-box"><div class="tip-inner"><p><img class="tip-icon" src="../images/icon-'+option.type+'.png" /></p>'+ option.message +'</div></div>';
    }else if(option.type=='load') {
        if(option.flag){
            html += '<div class="dialog-bg load-box"><div class="tip-inner white"><img class="icon-load" src="../images/icon-'+option.type+'.png" /></div></div>'
            $('#poster_page').append(html)
        }else{
            $('.dialog-bg.load-box').remove()
        }
    }else{
        html += '<div class="dialog-bg tip-box error" data-type="error"><div class="tip-inner">'+ option.message + '<div class="tip-inner></div>';
    }
    if(option.type!='load'){
        $('#poster_page').append(html)
        setTimeout(() => {
            $('.dialog-bg.tip-box').remove()
        }, option.time);
    }
    
}
