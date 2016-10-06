$(document).ready(function(){
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .keydown(function (e) {
        if (e.keyCode == 88) {
            $('#Energy-sound')[0].play(30);
            $('.ryu-ready').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').hide();
            $('.ryu-cool').show();
        }
    })
    .keyup(function (e) {
        if (e.keyCode == 88) {
            $('#Energy-sound')[0].pause();
            $('.ryu-cool').hide();
            $('.ryu-ready').show();
        };
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-still').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $('.hadouken').hide();
                $('.hadouken').css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}