$(document).ready(function () {
  $('#screen').load('1.abs.html');

  $(document).on('click', '#abs_button', function (event) {
    $('#screen').load('1.abs.html');
  });

  $(document).on('click', '#per_button', function (event) {
    $('#screen').load('2a.percent.html');
  });

  $(document).on('click', '#em_button', function (event) {
    $('#screen').load('2b.em.html');
  });

  $(document).on('click', '#rem_button', function (event) {
    $('#screen').load('2c.rem.html');
  });

  $(document).on('click', '#vwvh_button', function (event) {
    $('#screen').load('2d.vwvh.html');
  });
});
