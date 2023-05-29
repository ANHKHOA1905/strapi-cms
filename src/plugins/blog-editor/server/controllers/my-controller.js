'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('blog-editor')
      .service('myService')
      .getWelcomeMessage();
  },
});
