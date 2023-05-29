import React from 'react';
import Header from '@editorjs/header'
import List from '@editorjs/list'

const configuration = () => {
    return (
        {
            // Elemnt thast should contain Editor instance
            holder: 'editorjs',

            tool: {
                header: {
                    class: Header,
                    inlineToolbar: ['link']
                },
                list: {
                    class: List,
                    inlineToolbar: true
                }
            },
            data: {},
            onReady: () => {
                console.log("EDITOR JS ON READY")
            }
        }
    );
};

export default configuration;
