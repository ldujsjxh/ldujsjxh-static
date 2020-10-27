//# sourceURL=random-theme.js
//随机使用主题库的一种颜色主题
var colors = new Array("style.default","style.blue","style.red","style.green","style.sea","style.pink","style.violet");
var randomColor = Math.floor(Math.random()*7);
$('#theme-stylesheet').attr("href", "/common/css/theme-css/" + colors[randomColor] + ".css");

// $('.switcher-trigger').click(function () {
//     $('.switcher-wrap').toggleClass('active');
// });
// $('.color-switcher ul li').click(function () {
//     var color = $(this).attr('data-color');
//     $('#theme-color').attr("href", "/index/css/color/" + color + ".css");
//     $('.color-switcher ul li').removeClass('active');
//     $(this).addClass('active');
// });