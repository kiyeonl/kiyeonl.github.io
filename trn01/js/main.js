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

        let current = $('.slick-current');
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


});