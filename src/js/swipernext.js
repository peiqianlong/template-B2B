$(document).ready(function() {
    //缩略图的轮播图
    let swiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            stopOnLastSlider: true, //自动播放
            delay: 3000, //时间
        },
        effect: 'coverflow',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
})