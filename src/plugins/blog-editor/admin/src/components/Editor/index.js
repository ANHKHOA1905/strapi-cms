import React, {useRef, useEffect} from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// import Paragraph from '@editorjs/paragraph';
// import List from '@editorjs/list';


function Editor() {
    const editorRef = useRef(null);


    useEffect(() => {
        if (editorRef.current) {
            const editor = new EditorJS({
                holder: editorRef.current,
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: true
                    },
                    // Các công cụ khác
                },


            });
        }
    }, []);

    // const getData = () => {
    //     console.log(editorRef.save().then((data) => {
    //         console.log("--------------------")
    //         console.log("Check data blog web", data)
    //         console.log("--------------------")
    //     }))
    // }

    return <div>
        {/*<button onClick={() => {*/}
        {/*    getData()*/}
        {/*}*/}
        {/*}>*/}
        {/*    Get data*/}
        {/*</button>*/}
        <div ref={editorRef}></div>
    </div>
}

export default Editor

