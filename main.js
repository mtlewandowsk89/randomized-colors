$(document).ready(function() {
  var classNumber = 1;
  margin = 240;
  limit = 1;

  $('.dot').click(function() {
    var colors = ['blue', 'red', 'lime', 'green', 'pink', 'orange', 'yellow', 'purple', 'gray'];
    var colorChoice = colors[Math.floor(Math.random() * 9)];
    var x = Math.floor(Math.random() * 500) + 1;
    var y = Math.floor(Math.random() * 500) + 1;
    var rangeTopX = x + 50;
    var rangeBottomX = x - 50;
    var rangeTopY = y + 50;
    var rangeBottomY = y - 50;
    var location = $(".dot").position();
    $('.press').remove();
    classNumber++;
    if ((location.left >= rangeBottomX && location.left <= rangeTopX) && (location.top >= rangeBottomY && location.top <= rangeTopY)) {
      if (limit <= 5) {
      $(this).clone().appendTo('.container').css('background-color', colorChoice).css('border', 'none').css('height', '60px').css('width', '60px').css('line-height', '60px').css('position', 'fixed').css('margin-top', margin + 'px').text(classNumber);
      margin -= 60;
      } else {
        $('.cap').show();
        $('.dot:first-child').removeClass('spot');
      }
      limit++;
    } else {
      $(this).clone().appendTo('body').css('left', x).css('top', y).css('background-color', colorChoice).text(classNumber);
    }
  });
});