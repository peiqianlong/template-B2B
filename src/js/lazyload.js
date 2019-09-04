$(function() {
    $("img.lazyi").each(function() {
        var osrc = $(this).attr("src");
        $(this).attr("data-original", osrc);
        $(this).attr("src", "");
    });
});
jQuery.fn.extend({
    delayLoading: function(a) {
        function g(d) {
            var b, c;
            if (a.container === undefined || a.container === window) {
                b = $(window).scrollTop();
                c = $(window).height() + $(window).scrollTop()
            } else {
                b = $(a.container).offset().top;
                c = $(a.container).offset().top + $(a.container).height()
            }
            return d.offset().top + d.height() + a.beforehand >= b && c >= d.offset().top - a.beforehand
        }

        function h(d) {
            var b, c;
            if (a.container === undefined || a.container === window) {
                b = $(window).scrollLeft();
                c = $(window).width() + $(window).scrollLeft()
            } else {
                b = $(a.container).offset().left;
                c = $(a.container).offset().left + $(a.container).width()
            }
            return d.offset().left + d.width() + a.beforehand >= b && c >= d.offset().left - a.beforehand
        }

        function f() {
            e.filter("img[" + a.imgSrcAttr + "]").each(function(d, b) {
                if ($(b).attr(a.imgSrcAttr) !== undefined && $(b).attr(a.imgSrcAttr) !== null && $(b).attr(a.imgSrcAttr) !== "" && g($(b)) && h($(b))) {
                    var c = new Image;
                    c.onload = function() {
                        $(b).attr("src", c.src);
                        a.duration !== 0 && $(b).hide().fadeIn(a.duration);
                        $(b).removeAttr(a.imgSrcAttr);
                        a.success($(b))
                    };
                    c.onerror = function() {
                        $(b).attr("src",
                            a.errorImg);
                        $(b).removeAttr(a.imgSrcAttr);
                        a.error($(b))
                    };
                    c.src = $(b).attr(a.imgSrcAttr)
                }
            })
        }
        a = jQuery.extend({
            defaultImg: "",
            errorImg: "",
            imgSrcAttr: "originalSrc",
            beforehand: 0,
            event: "scroll",
            duration: "normal",
            container: window,
            success: function() {},
            error: function() {}
        }, a || {});
        if (a.errorImg === undefined || a.errorImg === null || a.errorImg === "") a.errorImg = a.defaultImg;
        var e = $(this);
        if (e.attr("src") === undefined || e.attr("src") === null || e.attr("src") === "") e.attr("src", a.defaultImg);
        f();
        $(a.container).bind(a.event, function() {
            f()
        })
    }
});
$(function() {
    $("img.lazyi").delayLoading({
        defaultImg: "../img/layz.gif", // 预加载前显示的图片
        errorImg: "", // 读取图片错误时替换图片(默认：与defaultImg一样)
        imgSrcAttr: "data-original", //记录图片路径的属性(默认：originalSrc，页面img的src属性也要替换为originalSrc)
        beforehand: 0, // 预先提前多少像素加载图片(默认：0)
        event: "scroll", // 触发加载图片事件(默认：scroll)
        duration: "normal", // 三种预定淡出(入)速度之一的字符串("slow", "normal", or "fast")或表示动画时长的毫秒数值(如：1000),默认:"normal"
        container: window, // 对象加载的位置容器(默认：window)
        success: function(imgObj) {}, // 加载图片成功后的回调函数(默认：不执行任何操作)
        error: function(imgObj) {} // 加载图片失败后的回调函数(默认：不执行任何操作)
    });
});