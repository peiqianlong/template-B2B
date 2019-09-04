$(document).ready(function() {
    var galleryTop = new Swiper('.gallery-top', {
        direction: 'vertical',
        spaceBetween: 10,
        loop: true,
        effect: 'cube', //切换方式
        autoplay: {
            stopOnLastSlider: true, //自动播放
            delay: 3000, //时间
            disableOnInteraction: false, //滑动滚动
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: {
                el: '.gallery-thumbs',
                direction: 'vertical',
                spaceBetween: 0,
                slidesPerView: 4,
                loop: true,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,

            },
            slideThumbActiveClass: 'thumb-active',
        },
    });

});