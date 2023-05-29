'use strict';

const pluginPkg = require('../../package.json');
console.log("Plugin pakage", pluginPkg)

module.exports = pluginPkg.strapi.name;
