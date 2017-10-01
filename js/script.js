function removeClass() {
  $('body').removeClass();
  $('p').removeClass();
}

$('a#green').click(function() {
  removeClass();
  $('body').addClass('green-background');
});

$('a#yellow').click(function() {
  removeClass();
  $('body').addClass('yellow-background');
});

$('a#red').click(function() {
  removeClass();
  $('body').addClass('red-background');
});

$('a#default').click(function() {
  removeClass();
});

$('p:first-of-type').click(function() {
  $(this).toggleClass('highlight');
});
