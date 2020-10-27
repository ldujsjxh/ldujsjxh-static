/*
 * @Author: your name
 * @Date: 2020-05-23 14:31:09
 * @LastEditTime: 2020-05-24 18:05:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \undefinedc:\Users\dell\Desktop\git\ldujsjxh-static\contact-us\js\contact-us.js
 */ 
 

//# sourceURL=contact-us.js
$(function () {
    //引入头部导航栏
    $("#navigation").load("/navigation.html");
});

$(function(){
    $("#submitInformation").click(
        function(){
            submit();
        }
    );
});


function submit(){
 var name = $("#myName").val();
 var College = $("#myCollege").val();
 var QQ = $("#myQQ").val();
 var Telephone = $("#myTelephone").val();
 var Text = $("#myText").val();
 if(name==""){
    alert("请填写姓名!");
    return false;
}
if(College==""){
    alert("请填写学院!");
    return false;
}
if(Text==""){
    alert("请填写留言内容!");
    return false;
}
if(QQ==""&&Telephone==""){
    alert("请填写联系方式!");
    return false;
}
 $.ajax({
    //将数据提交的哪里 URL就是网址
    url: "https://tool.lu/",
    //请求类型
    type: "POST",
    //发送的数据(键值对)
    data: {
        "姓名":name,
        "学院":College,
        "QQ":QQ,
        "联系电话":Telephone,
        "留言":Text
    },
    //返回的数据格式
    dataType: "text", //json(键值对)
    //响应成功执行的方法,参数为服务器返回的结果
    success: function (result) {
        alert("成功发送！");
     },
    //响应失败执行的方法
    error: function () {
        alert("数据响应失败!");
    }
});
}