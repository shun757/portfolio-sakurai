$(function(){
  $('.burger-btn').click(function () {
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
    $('header').toggleClass('onthecover');
    $('nav').fadeToggle(300);
    
  })

  if( $(window).width() <= 870 ){//デバイスの幅が768以下のとき
    $('.nav-list>a').on('click',function(){//.nav-item>aをクリックすると
        $('.burger-btn').removeClass('cross');//.btn_triggerのcloseクラスを削除
        $('header').removeClass('onthecover');
        $('nav').fadeOut(10);//.nav-wrapperが0.3秒でフェードアウト(メニューのフェードアウト)
    });
    }

})

