//Go To Top
(function ($) {
  $.fn.backToTop = function (options) {
    //Default options
    var settings = $.extend(
      {
        iconName: "fas fa-chevron-up",
        trigger: 300,
        fxName: "fade",
        fxTransitionDuration: 300,
        scrollDuration: 300,
      },
      options,
    );
    var btn = this,
      icon = settings.iconName,
      trigger = settings.trigger,
      fxName = settings.fxName,
      duration = settings.fxTransitionDuration,
      scrollDuration = settings.scrollDuration;

    this.each(function () {
      btn.prepend('<i class="' + icon + '"></i>');
      btn.addClass(fxName);
      btn.css({
        transitionDuration: duration + "ms",
      });

      $(window).scroll(function () {
        if ($(window).scrollTop() > trigger) {
          btn.addClass("bck-on");
        } else {
          btn.removeClass("bck-on");
        }
      });

      btn.on("click", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          scrollDuration,
        );
      });
    });

    return this;
  };
})(jQuery);

jQuery(document).ready(function () {
  $(".bck").backToTop({
    iconName: "bi bi-chevron-up",
    fxName: "rightToLeft",
  });
});


// Links Slide
$(document).ready(function () {
  $("#links-slide").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '120px',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyLoad: 'ondemand',

    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          centerPadding: '40px'
        }
      }
    ]
  });
});


//Student Slide Mobile,Table
$(document).ready(function () {
  $("#card-student").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    lazyLoad: "ondemand",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // desktop
        settings: "unslick", // ปิด slider
      },
    ],
  });
});


//Fead Slide PHUD HONG
$(document).ready(function () {
  $("#fade-slide").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: 'ondemand',
  });
});


//Tabs Bank Account
$(function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;

      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => {
        c.classList.remove("active");
        c.style.display = "none";
      });

      tab.classList.add("active");

      const target = document.getElementById(tab.dataset.tab);
      target.style.display = "block";
      requestAnimationFrame(() => {
        target.classList.add("active");
      });
    });
  });
});

//Copy Text
$(function () {
 document.querySelectorAll(".copyBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".bank");
      const accountNumber = card.querySelector(".account-no").innerText;
      const status = card.querySelector(".copyStatus");

      navigator.clipboard.writeText(accountNumber).then(() => {
        status.textContent = "คัดลอกแล้ว ✓";
        btn.textContent = "COPIED";

        setTimeout(() => {
          status.textContent = "";
          btn.textContent = "COPY";
        }, 2000);
      });
    });
  });

  });


  

  