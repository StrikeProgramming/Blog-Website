/*==================== NAV BACKGROUND SCROLL ====================*/

const nav = document.querySelector(".nav-wrapper");

window.addEventListener("scroll", () => {
  nav.classList.toggle("nav-scroll", window.scrollY > 20);
});

/*==================== FILTER ====================*/

$(document).ready(() => {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide(1000);
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
