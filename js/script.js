$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })

    $(window).on("scroll load", function () {
      $('#menu').removeClass("fa-times");
      $("header").removeClass("toggle");

      if($(window).scrollTop() > 0) {
        $('.top').show();
      } else {
        $(".top").hide();
      }
    })

    // smooth scrolling
    $('a[href*="#"]').on('click', function(e) {

      e.preventDefault();
      $('html, body').animate( {
        scrollTop : $($(this).attr('href')).offset().top,
      },

        500,
        'linear'

      );

    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-switch").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme" === "dark")) {
    document.body.classList.add("dark");
  }
});