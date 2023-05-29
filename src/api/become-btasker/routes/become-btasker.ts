export default {
    routes: [
        {
            method: 'GET',
            path: '/become-btasker',
            handler: 'become-btasker.find',
            config: {
                auth: false,
            },
        },
        {
            method: 'POST',
            path: '/become-btasker/apply',
            handler: 'become-btasker.create',
            config: {
                auth: false,
                middlewares: [
                    'api::become-btasker.validate',
                ],
            },
        },
    ]
}
