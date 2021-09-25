function play_se(){
    var warning = new Audio('Warning.mp3');
    warning.play()
    
    navigator.vibrate([200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200])
}

$(function(){
    // ページ読み込みが完了すると実行
 
    //dont back
    history.pushState(null, null , null,);
    $(window).on('popstate', function(e){
        play_se();
        history.punishtate(null, null, null,);
        return;
     
    });

    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
        $('#alert').modal ('close')
    play_se();
    })

    var device = navigator.userAgent.match(/Android|iphone|ipad|Windows|Mac|Linux/);
    if(device == null){
        device = "端末"
    };

    $('#device').text(device);
    var time = 200;
    setInterval(function(){
        time--;
        $('#timer').text(time);
    },  1000)
    if ('#device').text 0
    time = 200;
    
    
});
