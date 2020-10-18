$(function() {
    // 加载导航栏
    $('#navigation').load('../navigation.html', function() {
        // 导航栏修饰
        // console.log('navbar', $('#navigation nav'));
        $('#navigation nav').removeClass('fixed-top');
        $('#navigation nav').removeClass('container');
        $('#navigation nav').addClass('nav-container');
        // 让屏幕下滚的距离大于导航栏的高度时，让导航栏始终出现在屏幕上方（使用flex布局），否则使用普通布局 --start
        // 获取导航栏高度
        var box_top = $("#bottom-of-nav").offset().top;
        var flag = true;
        $(window).scroll(function() {
            if ($(document).scrollTop() >= box_top) {
                // 卷去头部
                $(".nav-container").addClass('fixed-top');
                if (flag) {
                    $(".nav-container").stop().fadeOut(0);
                    $(".nav-container").stop().fadeIn();
                    flag = false;
                }
            } else {
                // 未卷去头部
                $(".nav-container").removeClass('fixed-top');
                flag = true;
            }
        });
        // --end
        //点击按钮隐藏或显示菜单栏, 暂时没用
        $('.sidebar-toggler').click(function() {
            $('.sidebar').toggleClass('shrink show');
        });
    });
});