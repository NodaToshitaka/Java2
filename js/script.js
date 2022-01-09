$('.search-menu li a[class != "active"]').hide();
$('#btn .btn-off').hide();

$('#btn .btn-on').on('click', function(){
  $('.search-menu li a').show();
  $('#btn .btn-on').hide();
  $('#btn .btn-off').show();
})

$('#btn .btn-off').on('click', function(){
  $('.search-menu li a[class != "active"]').hide();
  $('#btn .btn-off').hide();
  $('#btn .btn-on').show();
})