window.addEventListener('pageshow', () => {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    prevArrow: '<i class="fa-solid prev fa-arrow-left-long"></i>',
    nextArrow: '<i class="fa-solid next fa-arrow-right-long"></i>',
    responsive: [
      {
        breakpoint: 950,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  });
  // scroll to top if btt button is clicked
  document.querySelector('#btt').addEventListener('click', () => {
    window.scrollTo({ top: 0 });
  });
  const bttOnScroll = () => {
    const bttButton = document.querySelector('#btt');
    // show/hide btt button on scroll
    bttButton.classList.toggle(
      'show',
      document.body.scrollTop || document.documentElement.scrollTop >= 70
    );
  };
  // toggle btt button properties on scroll
  window.onscroll = () => {
    bttOnScroll();
  };
  bttOnScroll();
});
