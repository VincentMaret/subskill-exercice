app.common.Accordion = class {
  constructor(animationTime) {
    this.animationTime = animationTime;
    this.openedFrame = undefined;
    this.lastClosedFrameParentId = undefined;
    this.isAnimated = false;
  }

  init() {
    this.setEvents();
  }
  setEvents() {
    $('.ac-q').on('click', this.accordionAnnimation.bind(this));
    $(window).on('resize', this.refreshOpenedFrame.bind(this));
  }
  accordionAnnimation(e) {
    if (this.isAnimated) { return; }
    this.isAnimated = true;

    const parentId = $(e.target).parent().attr('id');

    if (this.openedFrame) { this.closeAccordion(); }

    if (parentId != this.lastClosedFrameParentId) {
      this.openAccordion(e, parentId);
      //app.common.scrolling.scrollTo(parentId, 200, this.animationTime);
    }
    this.lastClosedFrameParentId = undefined;
  }
  openAccordion(e, parentId) {
    const t = this;
    const askedFrame = $(`#${parentId} > .ac-a`);
    const autoHeight = $(`#${parentId} > .ac-a`).css('height', 'auto').height();
    askedFrame.css('height', '0');
    askedFrame.animate({
      height: autoHeight
    }, this.animationTime, () => { t.isAnimated = false; });
    this.openedFrame = askedFrame;
  }
  closeAccordion() {
    const t = this;
    this.openedFrame.animate({
      height: 0
    }, this.animationTime, () => { t.isAnimated = false; });
    this.lastClosedFrameParentId = this.openedFrame.parent().attr('id');;
    this.openedFrame = undefined;
  }

  refreshOpenedFrame() {
    if (this.openedFrame) {
      const autoHeight = this.openedFrame.css('height', 'auto').height();
      this.openedFrame.animate({
        height: autoHeight
      }, 0);
    }
  }
}