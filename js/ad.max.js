// (function() {
//     if (typeof(g_ad_kw) !== 'undefined' && typeof(g_ad_num) !== 'undefined') {
//         $.post(g_tp + './index.html', { kw: g_ad_kw, c: g_ad_num },
//             function(res) {
//                 g_ad = eval(base64decode(res));
//             });
//     } else {
//         g_ad = [];
//     }
// })();


var showAd = function(callback) {
    if (typeof(g_ad) === 'undefined') {
        setTimeout(function() {
            showAd(callback)
        }, 50);
    } else {
        callback();
    }
};


// 左右移动广告
function scrollImage2(box, left, right, img, speed) {
    var box = $(box);
    var left = $(left);
    var right = $(right);
    var img = $(img).find('div').eq(0);

    var num = 4;


    if (document.getElementById) { //Chrome, FF
        a_speed = document.getElementById("speed");
    } else {
        a_speed = my_getElementsByidName("speed");
    }

    if (typeof(a_speed) === "undefined") {
        num = 4;
    } else {
        num = $('#speed').html();
    }


    var width_img = img.find('div').outerWidth(true);
    var width = (width_img * num); // + width_line;
    var zpage = $('#all-page').html();

    var curpage = 1;
    var s = speed;

    var num = img.find(" > div").length;
    var pos = 0;

    left.click(function() {
        pos += width;
        if (pos > 0) {
            pos = 0;
            return
        }

        img.animate({ 'left': pos }, function() {});

        if (curpage == 1) {
            curpage = zpage;
        } else {
            curpage--;
        }
        $('#current-page').html(curpage);

    });
    right.click(function() {
        pos -= width;
        if (pos <= -num * width_img) {
            pos += width;
            return;
        }
        img.animate({ 'left': pos }, function() {});

        if (curpage == zpage) {
            return;
            //curpage=1;
        } else {
            curpage++;
        }
        $('#current-page').html(curpage);

    });
}