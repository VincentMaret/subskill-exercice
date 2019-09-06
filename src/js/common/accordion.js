'use strict';

app.common.Accordion = class {
  constructor(animationTime) {
    this.animationTime = animationTime;
    this.openedFrame = undefined;
    this.lastClosedFrameParentId = undefined;
  }

  init() {
    this.setEvents();
  }
  setEvents() {
    $('.ac-q').on('click', this.accordionAnnimation.bind(this));
    $(window).on('resize', this.refreshOpenedFrame.bind(this));
  }
  accordionAnnimation(e) {
    $('.ac-q').off('click');

    const parentId = $(e.target).parent().attr('id');

    if (this.openedFrame) { this.closeAccordion(); }

    if (parentId != this.lastClosedFrameParentId) {
      this.openAccordion(e, parentId);
      //app.common.scrolling.scrollTo(parentId, 200, this.animationTime);
    }
    this.lastClosedFrameParentId = undefined;

    setTimeout(this.setEvents.bind(this), this.animationTime);
  }
  openAccordion(e, parentId) {
    const askedFrame = $(`#${parentId} > .ac-a`);
    const autoHeight = $(`#${parentId} > .ac-a`).css('height', 'auto').height();
    askedFrame.css('height', '0');
    askedFrame.animate({
      height: autoHeight
    }, this.animationTime);
    this.openedFrame = askedFrame;
  }
  closeAccordion() {
    this.openedFrame.animate({
      height: 0
    }, this.animationTime);
    this.lastClosedFrameParentId = this.openedFrame.parent().attr('id');;
    this.openedFrame = undefined;
  }

  refreshOpenedFrame() {
    const autoHeight = this.openedFrame.css('height', 'auto').height();
    this.openedFrame.animate({
      height: autoHeight
    }, 0);
  }
}