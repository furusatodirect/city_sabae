document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const mapSection = document.querySelector(".section-map");

  const specificPages = ["/help/agreement", "/help/tradelaw", "/help/privacy", "/help/about", "/contactmenu"];
  const currentPath = window.location.pathname;
  const isSpecificPage = specificPages.includes(currentPath);

  if (navbar && isSpecificPage) {
    navbar.classList.add("scrolled");
  } else if (navbar) {
    window.addEventListener("scroll", function () {
      if (mapSection) {
        const mapTop = mapSection.getBoundingClientRect().top + window.scrollY;
        const triggerPoint = mapTop - 96;
        if (window.scrollY > triggerPoint) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    });
  }

  // ハンバーガーメニュー開閉によるクラス付け
  const collapse = document.querySelector("#navbarSupportedContent");
  const togglerImg = document.querySelector(".navbar-toggler-img");

  const fadeSwitchIcon = (newSrc) => {
    if (!togglerImg) return;
    togglerImg.classList.add("fade-out");
    setTimeout(() => {
      togglerImg.src = "/town_sabae/img/" + newSrc;
      togglerImg.classList.remove("fade-out");
    }, 200);
  };

  if (collapse) {
    collapse.addEventListener("show.bs.collapse", function () {
      fadeSwitchIcon("icon_close.svg");
      if (navbar) navbar.classList.add("menu-open");
    });

    collapse.addEventListener("hide.bs.collapse", function () {
      fadeSwitchIcon("icon_menu.svg");
      if (navbar) navbar.classList.remove("menu-open");
    });
  }


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


      // SP時上部マージ
   // function adjustHeroMargin() {
   //   const navbarHeight = document.querySelector('.navbar').offsetHeight;
   //   const heroSection = document.querySelector('.section-hero');
    
   //   if (window.innerWidth <= 768) {
   //     heroSection.style.marginTop = navbarHeight + 'px';
   //   } else {
   //     heroSection.style.marginTop = '0';
   //   }
   // }
    


  })(window.jQuery);
});

