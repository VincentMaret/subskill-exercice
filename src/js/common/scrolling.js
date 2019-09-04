'use strict';

app.common.scrolling = {
  // -----------------------------------------
  setSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  },
  // -----------------------------------------
  scrollTo(elId, delay) {
    setTimeout(() => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(`#${elId}`).offset().top
      }, 500);
    }, delay);

  }
}