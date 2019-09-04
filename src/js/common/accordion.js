'use strict';

app.common.accordion = {
  openedFrame: undefined,
  lastClosedFrameParentId: undefined,
  init() {
    this.setEvents();
  },
  setEvents() {
    $('.ac-q').on('click', this.accordionAnnimation.bind(this));
  },
  accordionAnnimation(e) {
    const parentId = $(e.target).parent().attr('id');

    if (this.openedFrame) { this.closeAccordion(); }

    if (parentId != this.lastClosedFrameParentId) {
      this.openAccordion(e, parentId);
      app.common.scrolling.scrollTo(parentId, 1000)
    }
    this.lastClosedFrameParentId = undefined;
  },
  openAccordion(e, parentId) {
    const askedFrame = $(`#${parentId} > .ac-a`);
    const autoHeight = $(`#${parentId} > .ac-a`).css('height', 'auto').height();
    askedFrame.css('height', '0');
    askedFrame.animate({
      height: autoHeight
    }, 1000);
    this.openedFrame = askedFrame;
  },
  closeAccordion() {
    this.openedFrame.animate({
      height: 0
    }, 1000);
    this.lastClosedFrameParentId = this.openedFrame.parent().attr('id');;
    this.openedFrame = undefined;
  }
}