$(function () {
  var $stages = $('.stage'), $pins = $('.pins li'), $next = $('#next'), i = 0, n = $stages.length;
  function update() {
    var pct = Math.round(i / n * 100);
    $('.bar div').css('width', pct + '%');
    $('.bar').attr('aria-valuenow', pct);
    $pins.removeClass('on').slice(0, i).addClass('on');
  }
  $next.on('click', function () {
    if (i >= n) { return; }
    $stages.eq(i).hide().slideDown(600).attr('tabindex', -1).focus();
    i++;
    update();
    if (i === n) { $next.text('Journey complete').prop('disabled', true); }
    else { $next.text('Next stage'); }
  });
  $('#restart').on('click', function () {
    $stages.slideUp(300);
    i = 0;
    update();
    $next.prop('disabled', false).text('Start the journey');
  });
});
