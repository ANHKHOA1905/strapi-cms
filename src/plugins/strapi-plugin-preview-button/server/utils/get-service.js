'use strict';

const pluginId = require( './plugin-id' );

console.log("CHeck plugin strapi", strapi)

const getService = name => strapi.plugin( pluginId ).service( name );

module.exports = getService;
