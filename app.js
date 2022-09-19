$(document).ready(function () {
  $('#screen').load('abs.html');

  $(document).on('click', '#rem_button', function (event) {
    $('#screen').load('rem.html');
  });

  $(document).on('click', '#em_button', function (event) {
    $('#screen').load('em.html');
  });

  $(document).on('click', '#vwvh_button', function (event) {
    $('#screen').load('vwvh.html');
  });

  $(document).on('click', '#abs_button', function (event) {
    $('#screen').load('abs.html');
  });
  
});
