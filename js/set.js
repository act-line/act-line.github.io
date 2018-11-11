
function randomCharactor(c) {
    var randomChar = document.getElementsByClassName(c);
    for (var i = 0; i < randomChar.length; i++) {
        (function(i) {
            var randomCharI = randomChar[i];
            var randomCharIText = randomCharI.textContent;
            var randomCharLength = randomCharIText.length;
            var Num = ~~(Math.random() * randomCharLength);
            var newRandomChar = randomCharIText.substring(0, Num) + "<span>" + randomCharIText.charAt(Num) + "</span>" + randomCharIText.substring(Num + 1, randomCharLength);
            randomCharI.innerHTML = newRandomChar;
            document.getElementsByClassName(c)[0].children[0].addEventListener("animationend", function() {
                randomCharactor(c)
            }, false)
        })(i)
    }
}


randomCharactor("name");


 //■page topボタン
$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();

  //◇ボタンの表示設定
  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    } 
  });

  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });

});


