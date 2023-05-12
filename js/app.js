$(function () {
  // ハンバーガーメニュー　動き
  const hamburger = document.getElementById("js-hamburger");

  $(hamburger).click(function () {
    $(".header__globalNav").toggleClass("active");
    $(".header__bg").toggleClass("active");
    $(".header__hamburger").toggleClass("active");
  });

  // スムーズスクロール
  $("a[href^='#']").click(function () {
    const adjust = 0;
    const speed = 1500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
  });

  // スクロール時フェイドイン
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".js-fadein-ready").each(function () {
      const target = $(this).offset().top;
      if (scroll > target - windowHeight + 100) {
        $(this).addClass("js-fadein");
      }
    });
  });
});
