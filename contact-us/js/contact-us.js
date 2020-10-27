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

$(function () {
    $("#submitInformation").click(function () {
            submit();
            return false;
        }
    );
});


function submit() {
    var name = $("#myName").val();
    var academy = $("#myAcademy").val();
    var qq = $("#myQQ").val();
    var telephone = $("#myTelephone").val();
    var message = $("#myText").val();
    if (name == "") {
        alert("请填写姓名!");
        return false;
    }
    if (academy == "") {
        alert("请填写学院!");
        return false;
    }
    if (qq == "" && telephone == "") {
        alert("请填写联系方式!");
        return false;
    }
    if (message == "") {
        alert("请填写留言内容!");
        return false;
    }


    $.ajax({
        //将数据提交的哪里 URL就是网址
        url: "/java/newContactUs",
        //请求类型
        type: "POST",
        //发送的数据(键值对)
        data: {
            "name": name,
            "academy": academy,
            "qq": qq,
            "phoneNumber": telephone,
            "message": message
        },
        //返回的数据格式
        dataType: "text",
        success: function (result) {
            if (result == "yes") {
                alert("提交成功!");
                window.location.href = "/";
            } else {
                alert("错误, 请重试!");
            }
        },
        error: function () {
            alert("提交失败!")


        }
    });
}