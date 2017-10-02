$('#button').click(function() {
  $('body').toggleClass('night-mode');

  console.log($(this).text());
  if ($(this).text() === 'Switch to night mode') {
    $('#button').text('Switch to day mode');
  } else {
    $('#button').text('Switch to night mode');
  }
});
