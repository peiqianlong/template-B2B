$(document).ready(function() {
    var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                stopOnLastSlider: true,
                delay: 3000,
                disableOnInteraction: false,
            },
            effect: 'coverflow',
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            clickable: true,
        })
        //鼠标滑过pagination控制swiper切换
    for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
        mySwiper.pagination.bullets[i].onmouseover = function() {
            this.click();
        };
    }


    //如果你在swiper初始化后才决定使用clickable，可以这样设置
    mySwiper.params.pagination.clickable = true;
    //此外还需要重新初始化pagination
    mySwiper.pagination.destroy()
    mySwiper.pagination.init()
    mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
})