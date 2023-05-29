// @ts-ignore
import btaskee from "./extensions/btaskee.png"
import HelloWorldButton from "./extensions/components/HelloButton";
import en from "./extensions/translations/en";
import ContentPublicTime from "./extensions/components/ContentPublicTime";

export default {
    config: {
        tutorials: false,
        notifications: {
            release: false
        },
        locales: [
            'en',
        ],
        auth: {
            logo: btaskee,
        },
        head: {
            favicon: btaskee,
        },
        menu: {
            logo: btaskee,
        },
        theme: {
            colors: {
                alternative100: '#f6ecfc',
                alternative200: '#e0c1f4',
                alternative500: '#ac73e6',
                alternative600: '#9736e8',
                alternative700: '#8312d1',
                danger700: '#b72b1a'
            },
        },
        translations: {
            en: {
                ...en,
                "Auth.form.welcome.content": "...",
                "app.components.HomePage.welcome.link": "Welcome bTasker",
                "content-type-builder.plugin.name": "Structure Data",
            },

        },
    },
    register(app) {
        app.customFields.register({
            // …
            components: HelloWorldButton
            // …
        });
    },
    bootstrap(app) {
        console.log(app);
        app.injectContentManagerComponent("listView", "actions", {
            name: "HelloWorldButton",
            Component: HelloWorldButton,
        });
        app.injectContentManagerComponent('editView', 'informations', {
            name: 'ContentPubLibTime',
            Component: ContentPublicTime,
        });
        // app.injectComponent('tutorials', 'link', {
        //     name: 'hello',
        //     Component: () => 'hello'
        // })
        // app.injectAdminComponent('settings', 'components', [
        //     {
        //         name: "admin",
        //         Component: HelloWorldButton
        //     }
        // ]);
        // Cách xuatom  1 type trong strapi
        // app.addFields({type: 'text', Component: HelloWorldButton});
    },
};
