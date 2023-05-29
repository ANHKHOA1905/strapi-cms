import {Strapi} from "@strapi/strapi";
import {Validator} from "node-input-validator";
import {isEmpty} from "lodash";

interface BtaskerInfo {
    name: string
    age: number
    phone: number
}
const validationRule = {
    name: 'required|maxLength:255',
    age: 'required|integer|minLength:0|maxLength:255',
    phone: 'required|integer|minLength:8|maxLength:11',
}
const validatorInit = (requestData: BtaskerInfo, validateRule: { name: string, age: string, phone: string }): Validator => {
    return new Validator(requestData, {...validateRule})
}
const checkPassValidation = (RequestValidator: Validator): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        try {
            const isPass: boolean = await RequestValidator.check()
            resolve(isPass)
        } catch (e) {
            reject(false)
        }
    })
}

export default () => {
    return async (ctx, next) => {
        const requestData = JSON.parse(ctx.request.body);

        const RequestValidator = validatorInit(requestData, validationRule)
        const isPass = await checkPassValidation(RequestValidator)
        isPass ? await next() : ctx.body = {
            status: 400,
            message: !isEmpty(RequestValidator.errors) ? RequestValidator.errors : 'Error data !!'
        }
    };
};
