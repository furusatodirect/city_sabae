document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  // スクロールイベントでナビバーのスタイルを変更
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 以下に既存のコードを統合します。

  (function ($) {
    "use strict";

    // MENU
    $(".navbar-collapse a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    // CUSTOM LINK
    $(".smoothscroll").click(function () {
      var el = $(this).attr("href");
      var elWrapped = $(el);
      var header_height = $(".navbar").height();

      scrollToDiv(elWrapped, header_height);
      return false;

      function scrollToDiv(element, navheight) {
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - navheight;

        $("body,html").animate(
          {
            scrollTop: totalScroll,
          },
          300
        );
      }
    });

    // 「btn-topback
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) {
        $("#topback").fadeIn(300);
      } else {
        $("#topback").fadeOut(300);
      }
    });

    $(window).on("scroll", function () {
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height() * 0.5;
        if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass("active");
        }
        if (!(elemBottom <= docViewBottom)) {
          $(elem).removeClass("active");
        }
        var MainTimelineContainer = $("#timeline")[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height() * 0.5;
        $(MainTimelineContainer)
          .find(".inner")
          .css("height", MainTimelineContainerBottom + "px");
      }
      var timeline = $("#timeline li");
      Array.from(timeline).forEach(isScrollIntoView);
    });
  })(window.jQuery);
});
