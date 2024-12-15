
$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle_btn").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("#navi a").on("click", function () {
    $("header").toggleClass("open");
  });



    /*=================================================
  トップに戻る
  ===================================================*/
  let pagetop = $(".to-top");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
      // 0.5秒かけてページトップへ移動
      $("body,html").animate({ scrollTop: 0 }, 500 );
  
      // イベントが親要素へ伝播しないための記述
      // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
      return false;
    });




    $(window).scroll(function () {
      // fadeinクラスに対して順に処理を行う
      $(".fadein").each(function () {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
          $(this).css("opacity", "1");
          $(this).css("transform", "translateY(0)");
        }
      });
    });

  
      $('body').fadeIn(2500); //1秒かけてフェードイン！

});



