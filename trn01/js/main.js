$(function () {
    ////////////////////////////////////////////////////////////////////////////////
    // $('.xi-bars').on('click',function(){
    //     $(this).hide();

    // });

    // document.querySelector('.xi-bars').addEventListener('click',function(){}); 순수 자바스크립트
    /* document.querySelector('.xi-bars').addEventListener('click',() => {  리액트에서 많이 사용하는 공식 (this를 받지 못함)
    
    }); */



    //////////////////////////////////////////////////////////////////////////////


    // document.querySelector('.top_banner i').addEventListener('click', bannerClose);

    // var bannerClose = function() {
    //     document.querySelector('.top_banner').style.display = 'none';
    // }



    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });

    $('.main_slider').on('init afterChange', function (e, s, c) {
        // console.log(e, s, c);//0,1,2 https://github.com/kenwheeler/slick/ 참조
        // $('.main_slider figure').eq(c + 1).addClass('on').siblings.removeClass('on')

        let current = $('.main_slider .slick-current');
        current.addClass('on').siblings().removeClass('on');//slbling()함수는 나를 제외한 나머지 형제들 이라는 뜻
        $('.slideNum').text((c ? c + 1 : 1) + "/" + s.slideCount); //삼항연산자 : C가 있으면 C+1이고 아니면1을 붙혀라(C는 0이기 때문에 숫자로 인식하지 못함)

    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true, //자동움직임
        dots: true, //슬라이더 숫자
        pauseOnHover: false,//hover됐을 때 멈추는 기본 기능을 빼기
        pauseOnFocus: false,//포커스 됐을 때 멈추는 기본 기능을 빼기

    });

    $('.slideArrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });
    $('.slideArrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext');
    });


    $('.movie_arrows i:nth-child(1)').on('click', function () {
        $('.movie video').trigger('play');
    });

    $('.movie_arrows i:nth-child(2)').on('click', function () {
        $('.movie video').trigger('pause');
        //trigger 잘만들어준 함수를 쏴버린다라는 뜻
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/Pmt3tms9HdI',
        containment: '.utb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        //HTML꺼 그대로가져온것
        showControls: false,
        playOnlyIfVisible: true,
        //이 두줄은 https://github.com/pupunzi/jquery.mb.YTPlayer/wiki에 data-property:참조
    });

    $('.utb i:nth-child(1)').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });

    $('.utb i:nth-child(2)').on('click', function () {
        $('#bgndVideo').YTPPause();
    });

    $('.utb i:nth-child(3)').on('click', function () {
        $('#bgndVideo').YTPFullscreen();
    });
    //이 메소드들은 https://github.com/pupunzi/jquery.mb.YTPlayer/wiki에 External methods참조


    $('.product_slider').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 5,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }

            }
        ]
    });

    $('.product_arrows i:nth-child(1)').on('click', function () {
        $('.product_slider').slick('slickPrev');
    });

    $('.product_arrows i:nth-child(2)').on('click', function () {
        $('.product_slider').slick('slickNext');
    });

    $('.hd_left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.hd_right_slider',
    });
    $('.hd_right_slider').slick({
        arrows: false,
        slidesToShow: 5,
        asNavFor: '.hd_left_slider',
    });

    $('.hd_section .hd_arrows i:nth-child(1)').on('click', function () {
        $('.hd_right_slider').slick('slickPrev');
    });

    $('.hd_section .hd_arrows i:nth-child(2)').on('click', function () {
        $('.hd_right_slider').slick('slickNext');
    });

    $('.tab_menu li a').on('click', function (e) {
        e.preventDefault();
        //console.log($(this), $(this).parent().index());
        var idx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('#fl').on('change', function () {
        var lik = $(this).val();
        lik && window.open(lik);
        // if (lik)
        //window.open(lik);
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 800
            ? $('.to_top').fadeIn()
            : $('.to_top').fadeOut(1000)

        //삼항연산자라고함!

        // if (sct > 800) {
        //     $('.to_top').fadeIn()
        // } else {
        //     $('.to_top').fadeOut(1000)
        // }
    });

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
    });

    $('.header ul>li>a').on('click', function (event) {
        var idx = $(this).parent().index();
        if ($('nav').hasClass('on') && idx < 3) {
            event.preventDefault();
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('ul').slideUp();
        }
    });

    $(window).on('resize', function () {
        $('nav').removeClass('on');
        $('.header ul ul').removeAttr('style');
    });



});