/**
 * become-btasker controller
 */

import {factories, Strapi} from '@strapi/strapi'

export default factories.createCoreController('api::become-btasker.become-btasker', ({strapi}: { strapi: Strapi }) => ({
    async create(ctx) {
        try {
            const request = JSON.parse(ctx.request.body);
            const messageReturn = await strapi.service('api::become-btasker.become-btasker').addBtaskerInfo(request)
            ctx.body = {
                ...messageReturn
            };
        } catch (err) {
            ctx.body = err;
        }
    },
}));

