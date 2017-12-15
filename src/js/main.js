const main = () => {
  console.log("test");

  Slider();
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
