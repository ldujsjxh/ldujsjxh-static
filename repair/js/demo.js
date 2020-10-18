$(function () {
    //do something
    //监听按钮是否被点击
    $("#tj").click(function () {
        //如果按钮被点击,执行相应的方法
        tj();
    });
});

function tj(){
    var mz=$("#validationCustom01").val();
    //姓名
    var xy=$("#validationCustom02").val();
    //所在学院
    var dh=$("#validationCustomUsername").val();
    //电话号码
    var xxgz=$("#validationCustom03").val();
    //详细故障
    var pp=$("#validationCustom04").val();
    //品牌
    var bz=$("validationCustom05").val();
    //备注

    alert(mz);
    // 测试输入的数据
    $.ajax({
        //将数据提交的哪里 URL就是网址
        url: "http://www.baidu.com"+mz,
        //请求类型
        type: "POST",
        //发送的数据(键值对)
        data: {
           
        },
        //返回的数据格式
        dataType: "json", //json(键值对)
        //响应成功执行的方法,参数为服务器返回的结果
        success: function () {
            //3. 接受到服务器返回的内容key受到的内容添加到下面的红色方框里面
            //注意: 如果返回的是json数据,需要使用 返回结果.数值 的方式获取内容
            alert("数据响应成功!")

        },
        //响应失败执行的方法
        error: function () {
            alert("数据响应失败!");
        }
    });
}



