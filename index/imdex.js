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

    //在事件裡面加入一個條件判斷式
    // 兩個或以上條件一起判斷 可以用&&來連結 所有條件同時成立才為True
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

    // if ($(window).scrollTop() > 400 && $(window).scrollTop() <= 600) {
    //     $('.leafright').css('transform', 'rotate(40deg)');

    // }

    // else if ($(window).scrollTop() > 600 && $(window).scrollTop() <= 800) {
    //     $('.leafright').css('transform', 'rotate(50deg)');
    // }
    // else if ($(window).scrollTop() > 800) {
    //     $('.leafright').css('transform', 'rotate(70deg)');
    // }

    // else {
    //     $('.leafright').css('transform', 'rotate(35deg)');

    // 
});



// ------------Readmore---------

// $('.readmore').hover(function () {
//     console.log('hi', '123')
//     $('.ma').addClass('', '.5s');
//     $('.ma').css('background', '#2d5ba8');
//     $('.ma').css('color', '#FFF9F4')




// }, function () {


// })
