// index.js

//-------------Scroll-----------
$('box').css('width', (50 + '%'))
// console.log('body 全長:', $('body').height())

// console.log('分子/ 分母:', $(window).scrollTop() / $('body').height())
// console.log('乘以100:', ($(window).scrollTop() / $('body').height()) * 100);
// console.log('去掉後面小數點:', Math.floor(($(window).scrollTop() / $('body').height()) * 100))
// console.log('後面加一個%符號:', Math.floor(($(window).scrollTop() / $('body').height()) * 100) + '%');

$('.box').css('width', Math.floor(($(window).scrollTop() / $('body').height()) * 100) + '%');

$(window).scroll(function () {
    //100vh = 1/100 * window height
    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)


    console.log('percentage', percentage + '%');
    $('.box').css('width', percentage + '%');


    //左邊第一片葉子//

    if ($(window).scrollTop() > 400 && $(window).scrollTop() <= 600) {
        $('.leaf').css('transform', 'rotate(40deg)');

    }

    else if ($(window).scrollTop() > 600 && $(window).scrollTop() <= 800) {
        $('.leaf').css('transform', 'rotate(50deg)');
    }
    else if ($(window).scrollTop() > 800) {
        $('.leaf').css('transform', 'rotate(70deg)');
    }

    else {
        $('.leaf').css('transform', 'rotate(35deg)');

    }
});

//右邊第一片葉子//

$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 800 && $(window).scrollTop() <= 1200) {
        $('.img1').css('transform', 'rotate(10deg)');


    }

    else if ($(window).scrollTop() > 1200 && $(window).scrollTop() <= 1400) {
        $('.img1').css('transform', 'rotate(0deg)');
    }
    else if ($(window).scrollTop() > 1600) {
        $('.img1').css('transform', 'rotate(-10deg)');
    }

    else {
        $('.img1').css('transform', 'rotate(-20deg)');

    }

});

//左邊弟二片葉子//
$(window).scroll(function () {
    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 1400 && $(window).scrollTop() <= 1600) {
        $('.leaff').css('transform', 'rotate(40deg)');


    }

    else if ($(window).scrollTop() > 1600 && $(window).scrollTop() <= 1800) {
        $('.leaff').css('transform', 'rotate(50deg)');
    }
    else if ($(window).scrollTop() > 1800) {
        $('.leaff').css('transform', 'rotate(70deg)');
    }

    else {
        $('.leaff').css('transform', 'rotate(35deg)');
    }
});

//右邊弟二片葉子//
$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 1800 && $(window).scrollTop() <= 2000) {
        $('.img2').css('transform', 'rotate(10deg)');

    }

    else if ($(window).scrollTop() > 2000 && $(window).scrollTop() <= 2200) {
        $('.img2').css('transform', 'rotate(0deg)');
    }
    else if ($(window).scrollTop() > 2400) {
        $('.img2').css('transform', 'rotate(-30deg)');
    }

    else {
        $('.img2').css('transform', 'rotate(-20deg)');

    }
});

//左邊第三片葉子
$(window).scroll(function () {
    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 2400 && $(window).scrollTop() <= 2600) {
        $('.lea3f').css('transform', 'rotate(40deg)');
    }
    else if ($(window).scrollTop() > 2600 && $(window).scrollTop() <= 2800) {
        $('.lea3f').css('transform', 'rotate(50deg)');
    }
    else if ($(window).scrollTop() > 2800) {
        $('.lea3f').css('transform', 'rotate(70deg)');
    }

    else {
        $('.lea3f').css('transform', 'rotate(35deg)');
    }
});

//右邊弟三片葉子//
$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 2800 && $(window).scrollTop() <= 3000) {
        $('.img3').css('transform', 'rotate(10deg)');

    }

    else if ($(window).scrollTop() > 3200 && $(window).scrollTop() <= 3400) {
        $('.img3').css('transform', 'rotate(0deg)');
    }
    else if ($(window).scrollTop() > 3400) {
        $('.img3').css('transform', 'rotate(-30deg)');
    }

    else {
        $('.img3').css('transform', 'rotate(-20deg)');

    }
});

//scrollimage
$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 1500 && $(window).scrollTop() <= 2200) {
        $('.fish2').css('transform', 'translateX(590px)')

    }
    else {
        $('.fish2').css('transform', 'translateY(0)').css('opacity', '1')
    }
});

$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 2800 && $(window).scrollTop() <= 5000) {
        $('.fish3').css('transform', 'translateY(0)').css('opacity', '1')
    }
    else {

        $('.fish3').css('transform', 'translateX(-590px)')

    }
});

$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 3200 && $(window).scrollTop() <= 5000) {
        $('.waterr').css('transform', 'translateY(0)').css('opacity', '1')
    }
    else {

        $('.waterr').css('transform', 'translateX(590px)')

    }
});

$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 1600 && $(window).scrollTop() <= 3200) {
        $('.fish').css('transform', 'translateY(0)').css('opacity', '1')
    }
    else {
        $('.fish').css('transform', 'translateX(-590px)')
    }
});
// -----

$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 2000 && $(window).scrollTop() <= 3200) {
        $('.fish2').css('transform', 'translateY(0)').css('opacity', '1')

    }
    else {

        $('.fish2').css('transform', 'translateX(590px)').css('opacity', '1')
    }
});

$(window).scroll(function () {

    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)

    if ($(window).scrollTop() > 700 && $(window).scrollTop() <= 5000) {

        $('.sealeft').css('transform', 'translateY(0)').css('opacity', '1')

    }
    else {

        $('.sealeft').css('transform', 'translateX(590px)')
    }

});

$(window).scroll(function () {
    //100vh = 1/100 * window height
    const bodyMinusWindowHeight = $('body').height() - $(window).height();

    const percentage = Math.floor(($(window).scrollTop() / bodyMinusWindowHeight) * 100)


    console.log('percentage', percentage + '%');
    $('.box').css('width', percentage + '%');




    if ($(window).scrollTop() > 300 && $(window).scrollTop() <= 5000) {
        $('.boat').css('transform', 'translateY(0)').css('opacity', '1')
    }


    else {
        $('.boat').css('transform', 'translateX(-610px)')
    }
});
// ------------Readmore---------

// $('.readmore').hover(function () {
//     console.log('hi', '123')
//     $('.btn').addClass('transition', '.5s');
//     $('.btn').css('background', '#2d5ba8');
//     $('.btn').css('color', '#FFF9F4')




// }, function () {


// })

$(window).scroll(function () {
    $('.jq1 , .jq2, .jq3, .jq4').each(function (index, item) {
        console.log('item:', $(item).offset().top);
        if ($(window).scrollTop() + $(window).height() >= $(item).offset().top) {
            $(item).addClass('show')
        }
        else {
            $(item).removeClass('show')
        }
    });
});



