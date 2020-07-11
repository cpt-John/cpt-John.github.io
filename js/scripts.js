/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
  //custom
  $("#fb-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://www.facebook.com/johnfrancispullikotil", "facebook");
  });
  $("#ig-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://www.instagram.com/munchkin_.man/", "instagram");
  });
  $("#github-profile").on("click", function (event) {
    event.preventDefault();
    window.open("https://github.com/cpt-John", "github");
  });
  $("#linkedin-profile").on("click", function (event) {
    event.preventDefault();
    window.open(
      "https://www.linkedin.com/in/john-francis-526999148/",
      "linkedin"
    );
  });
  $("#gmail-send").on("click", function (event) {
    event.preventDefault();
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=johnfrancis95815@gmail.com&tf=1",
      "gmail"
    );
  });
})(jQuery); // End of use strict
