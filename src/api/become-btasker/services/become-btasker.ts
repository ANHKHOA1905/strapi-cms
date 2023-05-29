/**
 * become-btasker service
 */

import {factories, Strapi} from '@strapi/strapi';
import {isEmpty} from "lodash";

interface BtaskerInfor {
    name: string
    age: number
    phone: number
}

const addDataForTableBecomeBtasker = (data: BtaskerInfor): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        try {
            if (isEmpty(data)) reject(false)
            await strapi.db.query('api::become-btasker.become-btasker').create({
                data,
            })
            resolve(true)
        } catch (e) {
            reject(false)
        }
    })
}

export default factories.createCoreService('api::become-btasker.become-btasker', ({strapi}: { strapi: Strapi }) => ({
    async addBtaskerInfo(...args) {
        return new Promise(async (resolve, reject) => {
            const [btaskerInfo] = args
            const isAddDataSuccess = await addDataForTableBecomeBtasker(btaskerInfo)
            isAddDataSuccess ? resolve({
                status: 200,
                message: "Successfully !!"
            }) : reject({
                status: 400,
                message: "Try again !!"
            })

        })
    },
    // async checkQuery(...args) {
    //     return await strapi.db.query('api::feedback.feedback').findMany({
    //         select: ['title', 'description'],
    //         where: {title: 'Hello World'},
    //         orderBy: {publishedAt: 'DESC'},
    //     })
    // }
}));
