
$('.switch3').click(function() {
    if($('.circle').hasClass('spin') == false) {
        $('#audio').get(0).play();
        $('.circle__btn__img').attr('src','images/stop.svg')
        $('.circle').addClass('spin')
        $('.base__stick').addClass('stick__active')
        $('.switch1').addClass('green')
        $('.switch2').removeClass('red')
        $('.switch3').text('Stop')
    } else {
        $('.circle').removeClass('spin');
        $('#audio').get(0).pause();
        $('.circle__btn__img').attr('src','images/play.svg');
        $('.base__stick').removeClass('stick__active');
        $('.switch1').removeClass('green')
        $('.switch2').addClass('red')
        $('.switch3').text('Play')
    }
    
    
})

$('.list1').click(function() {
    if($('.player').hasClass('bg1') == false) {
        $('.base__stick').removeClass('stick__active');
        $('.circle').removeClass('spin');
        $('.player').removeClass('bg2')
        $('.player').removeClass('bg3')
        $('.player').addClass('bg1')
        $('.circle').css('background-image','url(images/booyah.jpg)');
        $('#audio').attr('src','mp3/booyah.mp3')
    } else {
        $('.player').removeClass('bg1')
        $('.circle').css('background-image','none');
        $('#audio').attr('src','none')
    }
})

$('.list2').click(function() {
    if($('.player').hasClass('bg2') == false) {
        $('.base__stick').removeClass('stick__active');
        $('.circle').removeClass('spin');
        $('.player').removeClass('bg1')
    $('.player').removeClass('bg3')
        $('.player').addClass('bg2')
        $('.circle').css('background-image','url(images/inthenameoflove.jpg)');
        $('#audio').attr('src','mp3/inthenameoflove.mp3')
    } else {
        $('.player').removeClass('bg2')
        $('.circle').css('background-image','none');
        $('#audio').attr('src','none')
    }
})

$('.list3').click(function() {
    if($('.player').hasClass('bg3') == false) {
        $('.base__stick').removeClass('stick__active');
        $('.circle').removeClass('spin');
        $('.player').removeClass('bg1')
    $('.player').removeClass('bg2')
        $('.player').addClass('bg3')
        $('.circle').css('background-image','url(images/beautiflulnow.jpg)');
        $('#audio').attr('src','mp3/beautifulnow.mp3')
    } else {
        $('.player').removeClass('bg3')
        $('.circle').css('background-image','none');
        $('#audio').attr('src','none')
    }
})

