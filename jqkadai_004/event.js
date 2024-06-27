// ドキュメントが読み込まれた後に実行される処理
$(window).on('load', function() {
  console.log('loadイベントが発生しました');
});

// 画面がスクロールされた際に実行される処理
$(window).on('scroll', function() {
  console.log('scrollイベントが発生しました');
});
