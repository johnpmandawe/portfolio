window.addEventListener('pageshow', () => {
  // toggle menu bottom borders on scroll event
  const toggleLinkBordersOnScroll = () => {
    const removeAllLinkBottomBorders = () => {
      const menuLinks = document.querySelectorAll('.menu li a');
      menuLinks.forEach((menu) => {
        menu.classList.remove('active');
      });
    };
    /* targeting elements */
    const homeLink = document.querySelector('.home');
    const aboutLink = document.querySelector('.about');
    const projectsLink = document.querySelector('.projects');
    const servicesLink = document.querySelector('.services');
    const contactLink = document.querySelector('.contact');
    /* getting each section's height */
    const homeHeight = document.querySelector('#home').clientHeight;
    const aboutHeight = document.querySelector('#about').clientHeight;
    const projectsHeight = document.querySelector('#projects').clientHeight;
    const servicesHeight = document.querySelector('#services').clientHeight;
    if (document.documentElement.scrollTop >= 0) {
      removeAllLinkBottomBorders();
      homeLink.classList.add('active');
    }
    if (document.documentElement.scrollTop >= homeHeight - 70) {
      removeAllLinkBottomBorders();
      aboutLink.classList.add('active');
    }
    if (document.documentElement.scrollTop >= homeHeight + aboutHeight - 70) {
      removeAllLinkBottomBorders();
      projectsLink.classList.add('active');
    }
    if (
      document.documentElement.scrollTop >=
      homeHeight + aboutHeight + projectsHeight - 70
    ) {
      removeAllLinkBottomBorders();
      servicesLink.classList.add('active');
    }
    if (
      document.documentElement.scrollTop >=
      homeHeight + aboutHeight + projectsHeight + servicesHeight - 70
    ) {
      removeAllLinkBottomBorders();
      contactLink.classList.add('active');
    }
  };
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
    toggleLinkBordersOnScroll();
  };
  bttOnScroll();
  toggleLinkBordersOnScroll();
});
