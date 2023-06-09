export default [
    {resolve: './src/middlewares/admin-redirect'},
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
                    'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    // {
    //     name: 'strapi::cors',
    //     config: {
    //         origin: ['example.com', 'subdomain.example.com', 'someotherwebsite.org'],
    //         methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    //         headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    //         keepHeaderOnError: true,
    //     },
    // }
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
