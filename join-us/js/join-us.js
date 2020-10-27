//# sourceURL=join-us.js
$(function () {
    //关闭注册通道注册通道
    closeEnroll();

    //引入头部导航栏
    $("#navigation").load("/navigation.html");
});

function closeEnroll() {
    var isDownload = confirm("同学您好，目前网上报名通道暂未开启，请下载纸质版报名表打印填写, 是否下载纸质版报名表？");
    if (isDownload == true) {
        window.location.href = "2020 计算机协会纳新表.pdf";
    } else {
        window.location.href = "/";
    }

}