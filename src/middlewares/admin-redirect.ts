export default (_config, {strapi}) => {
    const redirects = ['/', '/dashboard', '/index.html'].map((path: string) => ({
        method: 'GET',
        path,
        handler: (ctx) => ctx.redirect('/dashboard/content-manager'),
        config: {auth: false},
    }));

    strapi.server.routes(redirects);
};

