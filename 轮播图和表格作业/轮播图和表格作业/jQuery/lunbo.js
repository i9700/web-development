var i = 0;
$(".right-btn").click(click_right);

// 右侧按钮
function click_right() {
    if (i === 3) {
        i = -1;
    }
    i++;
    $(".outer .img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(".outer .img li").eq(i).removeClass("hide").siblings().addClass("hide");
    $(".outer .num li").eq(i).addClass("current").siblings().removeClass("current");
}

// 左侧按钮
$(".left-btn").click(click_left);

function click_left() {
    if (i === 0) {
        i = 4;
    }
    i--;
    $(".outer .img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(".outer .img li").eq(i).removeClass("hide").siblings().addClass("hide");
    $(".outer .num li").eq(i).addClass("current").siblings().removeClass("current");
}

// 两侧按钮动画效果
$(".outer").hover(mouseover, mouseout);
var num = 0;

function mouseover() {
    //判断是否首次加载
    if (num === 0) {
        $(".btn").attr("class", "btn");
        num++;
    } else {
        $(".btn").fadeIn(function () {
            // alert("显示成功")
        });
    }
}

function mouseout() {
    $(".btn").fadeOut(function () {
        // alert("隐藏成功")
    })
}

// 悬浮切换效果
$(".num li").mouseover(function () {
    var index = $(this).index();
    $(".outer .img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    $(".outer .img li").eq(index).removeClass("hide").siblings().addClass("hide");
    $(".outer .num li").eq(index).addClass("current").siblings().removeClass("current");
})

// 自动轮播
// 设置循环定时器
var ID = window.setInterval(click_right, 2000);
$(".outer").hover(over, out);

// 停止轮播
function over() {
    clearInterval(ID);
}

// 触发轮播
function out() {
    ID = window.setInterval(click_right, 2000);
}