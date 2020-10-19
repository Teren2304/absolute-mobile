$(document).ready(function(){
  $('.preloader').addClass('preloader--active');

  setTimeout(function(){
    $('.preloader').fadeOut();
  }, 2000);
});

$('.h-toggle').click(function() {
  if ($('.h-aside').hasClass('h-aside--active')) {
    $('.h-aside').removeClass('h-aside--active');
    $('.h-search').removeClass('h-search--active');
    $(this).removeClass('h-toggle--active');
  }
  else {
    $('.h-aside').addClass('h-aside--active');
    $(this).addClass('h-toggle--active');
  }
});


$('#h-submenu-search').click(function() {
  if ($('.h-aside').hasClass('h-aside--active')) {
    $('.h-aside').removeClass('h-aside--active');
    $('.h-toggle').removeClass('h-toggle--active');
    $('.h-search').removeClass('h-search--active');
  }
  else {
    $('.h-aside').addClass('h-aside--active');
    $('.h-toggle').addClass('h-toggle--active');
    $('.h-search').addClass('h-search--active');
  }
});

$('#h-submenu-button').click(function(){
  if ($('.betslip').hasClass('betslip--active')) {
    $('.betslip').removeClass('betslip--active');
    $(this).removeClass('h-submenu__button--active');
  }
  else {
    $('.betslip').addClass('betslip--active');
    $(this).addClass('h-submenu__button--active');
  }
});

$('.h-account').click(function(){
  if ($('.cb-aside').hasClass('cb-aside--active')) {
    $('.cb-aside').removeClass('cb-aside--active');
  }
  else {
    $('.cb-aside').addClass('cb-aside--active');
    $(this).addClass('cb-aside--active');
  }
});

$('#h-service-lang').click(function(){
  if ($('.h-aside__languages').hasClass('h-aside__languages--active')) {
    $('.h-aside__languages').removeClass('h-aside__languages--active');
    $(this).removeClass('h-service__item--active');
  }
  else {
    $('.h-aside__languages').addClass('h-aside__languages--active');
    $(this).addClass('h-service__item--active');
  }
});

$('#h-service-setting').click(function(){
  if ($('.h-aside__settings').hasClass('h-aside__settings--active')) {
    $('.h-aside__settings').removeClass('h-aside__settings--active');
    $(this).removeClass('h-service__item--active');
  }
  else {
    $('.h-aside__settings').addClass('h-aside__settings--active');
    $(this).addClass('h-service__item--active');
  }
});
