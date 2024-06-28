$(function() {
     $('#change-color').on({'click': () => {
         // 文字を赤 
         $('p').css('color', 'blue');
        },
     });
     $('#change-text').on({'click': () => {
         $('p').text('hello')
         },
     });
     $('#fade-out').on('click', function() {
        // フェードアウトする
        $('p').fadeOut();
     });  
     $('#fade-in').on('click', function() {
        // フェードインする
        $('p').fadeIn();
      });     
 });  