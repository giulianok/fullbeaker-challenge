const main = () => {
  console.log("test");

  Header();
  Menu();
  Slider();
};

const Header = () => {
  let header = $(".Header");
  let hideOnActive = header.find(".hideOnActive");
  let showOnActive = header.find(".showOnActive");
  let wind = $(window);
  wind.scroll(() => {
    let position = wind.scrollTop();
    let activeAfter = 300;
    header.toggleClass("active", position > activeAfter);
    hideOnActive.toggleClass("hidden", position > activeAfter);
    showOnActive.toggleClass("hidden", position <= activeAfter);
  });
};

const Menu = () => {
  const show = menu => {
    menu
      .addClass("active")
      .stop()
      .animate(
        {
          height: "100%"
        },
        400
      );
  };

  const hide = menu => {
    menu
      .removeClass("active")
      .stop()
      .animate(
        {
          height: "0%"
        },
        400
      );
  };

  $("[toggle-menu]").click(function() {
    console.log("click!");
    let menu = $(`.${$(this).attr("menu-class")}`);
    let isActive = menu.hasClass("active");
    menu.toggleClass("active");

    if (!isActive) {
      show(menu);
    } else {
      hide(menu);
    }

    menu.find("a").click(() => hide(menu));
  });
};

const Slider = () => {
  $("#slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000 * 10
  });
};

$(document).ready(main);
