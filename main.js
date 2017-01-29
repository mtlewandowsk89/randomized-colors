$(document).ready(function() {
  var classNumber = 1;
  var margin = 240;
  var limit = 1;

  $('.dot').click(function() {
    timer = setInterval(numberPick, 200);
    dot = $(this);
  });

  function numberPick() {
    var colors = ['blue', 'red', 'lime', 'green', 'pink', 'orange', 'yellow', 'purple', 'aqua'];
    var colorChoice = colors[Math.floor(Math.random() * 9)];
    var x = Math.floor(Math.random() * 400) + 1;
    var y = Math.floor(Math.random() * 400) + 1;
    var rangeTopX = x + 75;
    var rangeBottomX = x - 75;
    var rangeTopY = y + 75;
    var rangeBottomY = y - 75;
    var location = $(".target").position();
    $('.press').hide();
    classNumber++;
    if ((location.left >= rangeBottomX && location.left <= rangeTopX) && (location.top >= rangeBottomY && location.top <= rangeTopY)) {
      if (limit <= 5) {
        dot.clone().appendTo('.container').addClass('chosen').css('background-color', colorChoice).css('border', 'none').css('height', '60px').css('width', '60px').css('line-height', '60px').css('position', 'fixed').css('margin-top', margin + 'px').text(classNumber).attr('data-color', colorChoice);
        margin -= 60;
      } else {
        $('.cap').show();
        $('.reset').show();
        limit = 1;
        classNumber = 1;
        margin = 240;
        clearInterval(timer);
        colorCount();
        numberFind();
        return;
      }
      limit++;
    } else {
      dot.clone().appendTo('body').css('left', x).css('top', y).css('background-color', colorChoice).text(classNumber).attr('data-color', colorChoice);
    };
  };

  function colorCount() {
    var redDots = $(".dot[data-color='red']").length;
    var blueDots = $(".dot[data-color='blue']").length;
    var limeDots = $(".dot[data-color='lime']").length;
    var greenDots = $(".dot[data-color='green']").length;
    var pinkDots = $(".dot[data-color='pink']").length;
    var orangeDots = $(".dot[data-color='orange']").length;
    var yellowDots = $(".dot[data-color='yellow']").length;
    var purpleDots = $(".dot[data-color='purple']").length;
    var aquaDots = $(".dot[data-color='aqua']").length;
    var colorAmount = Math.max(redDots, blueDots, limeDots, greenDots, pinkDots, orangeDots, yellowDots, purpleDots, aquaDots);
    switch (colorAmount) {
      case redDots:
        $(".dot[data-color='red']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'red').text('red');
        break;
      case blueDots:
        $(".dot[data-color='blue']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'blue').text('blue');
        break;
      case limeDots:
        $(".dot[data-color='lime']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'lime').text('lime');
        break;
      case greenDots:
        $(".dot[data-color='green']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'green').text('green');
        break;
      case pinkDots:
        $(".dot[data-color='pink']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'pink').text('pink');
        break;
      case orangeDots:
        $(".dot[data-color='orange']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'orange').text('orange');
        break;
      case yellowDots:
        $(".dot[data-color='yellow']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'yellow').text('yellow');
        break;
      case purpleDots:
        $(".dot[data-color='purple']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'purple').text('purple');
        break;
      case aquaDots:
        $(".dot[data-color='aqua']").each(function() {
          if ($(this).hasClass('chosen')) {
            $(this).css('animation-name', 'spin');
          } else {
            $(this).css('animation-name', 'grow').text('');
          };
        });
        $('.luckyColor').show();
        $('.color').css('color', 'aqua').text('aqua');
        break;
    };
  };

  function numberFind() {
    var a = parseInt($('.chosen:first-child').text());
    var b = parseInt($('.chosen:nth-child(2)').text());
    var c = parseInt($('.chosen:nth-child(3)').text());
    var d = parseInt($('.chosen:nth-child(4)').text());
    var e = parseInt($('.chosen:nth-child(5)').text());
    var luckyNumber = Math.round((a + b + c + d + e)/5);
    $('.number').text(luckyNumber);
    $('.luckyNumber').show();
  };

  $('.reset').click(function() {
    $('.dot:not(:first-child)').remove();
    $('.container').find('.dot').remove();
    $('.cap').hide();
    $('.press').show();
    $(this).hide();
    $('.luckyColor').hide();
    $('.luckyNumber').hide();
  });
});