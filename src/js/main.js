'use strict';

const app = app || {
  common: {},
  pages: {}
};

$(init);

function init() {
  const pageId = $('body').attr('id');
  app.pageInstance = new app.pages[pageId]();

  app.common.commonInit();
  app.pageInstance.init();
}