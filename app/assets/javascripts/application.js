// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).scroll(function() {
   if($(window).scrollTop() > 720) {
    // $("#nav").removeClass("navbar-fixed-top");
    $("#nav").addClass("custom-nav-top");
    $('#nav .navbar-brand').addClass("animated");
    $("#contact-icons .icons").addClass("display")
  }else{
    $("#nav").removeClass("custom-nav-top");
    $("#nav").addClass("navbar-fixed-top")
    $("#contact-icons .icons").removeClass("display");
  }
});
