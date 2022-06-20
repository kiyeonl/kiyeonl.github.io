$(function () {

    $('#portfolio').fullpage({
        anchors: ['p01', 'p02', 'p03', 'p04', 'p05'],
        /*anchors는 페이지에 해시태그 기능을 부여하는 역할*/
        afterLoad: function (anchorLink, index) {
            const delayClass = () => {
                $(this).addClass('on').siblings().removeClass('on');
            }
            setTimeout(delayClass)

            $('.nb li').eq(index - 1).addClass('on').siblings().removeClass('on');

        },
    });

    $('.cover_open').on('click', function () {
        $('#cover').toggleClass('on')
    });

    $('#cover a').on('click', function () {
        $('#cover').removeClass('on')
    })

})