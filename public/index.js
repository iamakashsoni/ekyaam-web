(function ($) {
  "use strict";
  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    boundary: "window",
    template:
      '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
  });

  // Toggle the side navigation
  $("#sidenavToggler").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    $(
      ".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level"
    ).removeClass("show");
  });

  // Force the toggled class to be removed when a collapsible nav link is clicked
  $(".navbar-sidenav .nav-link-collapse").on("click", function (e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $(
    "body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse"
  ).on("mousewheel DOMMouseScroll", function (e) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  });
})(jQuery); // End of use strict
