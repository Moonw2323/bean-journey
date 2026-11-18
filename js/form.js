$(function () {
  var KEY = 'beanJourneySubs';
  var rules = {
    name: function (v) { return v.trim().length >= 2 || 'Enter your name (at least 2 characters).'; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter an email like name@example.com.'; },
    blend: function (v) { return v !== '' || 'Choose a blend.'; },
    frequency: function (v) { return v !== '' || 'Choose how often you want delivery.'; }
  };
  function check(id) {
    var $f = $('#' + id), r = rules[id]($f.val()), ok = (r === true);
    $f.toggleClass('bad', !ok).attr('aria-invalid', !ok);
    $('#' + id + '-err').text(ok ? '' : r);
    return ok;
  }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function render() {
    var list = load(), $ul = $('#subs').empty();
    if (!list.length) { $ul.append($('<li>').text('No subscriptions yet. Fill in the form to add one.')); return; }
    list.forEach(function (s) {
      $ul.append($('<li>').text(s.name + ': ' + s.blend + ', ' + s.grind + ', ' + s.frequency));
    });
  }
  Object.keys(rules).forEach(function (id) {
    $('#' + id).on('blur change', function () { check(id); })
               .on('input', function () { if ($(this).hasClass('bad')) { check(id); } });
  });
  $('#sub-form').on('submit', function (e) {
    e.preventDefault();
    var ok = true;
    Object.keys(rules).forEach(function (id) { if (!check(id)) { ok = false; } });
    if (!ok) { $('.bad').first().focus(); $('#msg').text(''); return; }
    var list = load();
    list.push({ name: $('#name').val().trim(), blend: $('#blend').val(),
                grind: $('input[name=grind]:checked').val(), frequency: $('#frequency').val() });
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (err) {}
    render();
    this.reset();
    $('#msg').text('Subscription added. Thank you!');
  });
  $('#clear').on('click', function () { try { localStorage.removeItem(KEY); } catch (e) {} render(); $('#msg').text(''); });
  render();
});
