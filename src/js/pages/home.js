app.pages.Home = class {
  constructor() {
  }
  init() {
    this.accordion = new Accordion('.accordion-container', {
      duration: 200,
      itemNumber: 10,
      onToggle: function (el) {
        const elId = $(el).attr('id');
        setTimeout(function () {
          app.common.scrolling.scrollTo(elId, 100);
        }, 100);
      }
    });
  }

}