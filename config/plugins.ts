export default ({env}) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'anhkhoa.nguyen@btaskee.com',
                defaultReplyTo: 'anhkhoa.nguyen@btaskee.com',
            },
        },
    },
    'preview-button': {
        enabled: true,
        config: {
            contentTypes: [
                {
                    uid: 'api::blog.blog',
                    draft: {
                        url: 'http://localhost:3000/api/preview',
                        query: {
                            type: 'blog',
                            slug: '{slug}',
                        },
                    },
                    published: {
                        url: 'http://localhost:3000/{slug}',
                        copy: false
                    },
                },
            ],
        },
        resolve: './src/plugins/strapi-plugin-preview-button'
    },
    'seo': {
        enabled: true,
        resolve: './src/plugins/strapi-plugin-seo-main'
    },
    'ratings': {
        enabled: true,
        resolve: './src/plugins/strapi-plugin-ratings'
    },
    'componentpreview': {
        enabled: true,
        resolve: './src/plugins/strapi-plugin-component-preview'
    },
    'blog-editor': {
        enabled: true,
        resolve: './src/plugins/blog-editor'
    },
    // 'editorjs': {
    //     enabled: false,
    //     // resolve: './src/plugins/strapi-plugin-react-editorjs'
    // }

});
