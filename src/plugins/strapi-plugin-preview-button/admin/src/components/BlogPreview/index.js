import React, {useState} from 'react';
import {
    ModalLayout, ModalBody, ModalHeader, ModalFooter, Button, Box, TabGroup, Tabs, Tab, TabPanel, TabPanels
} from '@strapi/design-system';
import {useCMEditViewDataManager} from '@strapi/helper-plugin';
import TemplatePreview from "../TemplatePreview";


const BlogPreview = ({click}) => {
    click && console.log("Click")

    const {modifiedData} = useCMEditViewDataManager()
    console.log("-------------------------")
    console.log("Check data modifyed", modifiedData)
    console.log("-------------------------")


    const [isVisible, setIsVisible] = useState(false);
    return <>
        <Button onClick={() => setIsVisible(prev => !prev)}>Click to open Modal</Button>
        {isVisible && <ModalLayout style={{
            width: '100vw', height: '100vh'
        }} onClose={() => setIsVisible(prev => !prev)} labelledBy="title">
            <ModalHeader>

            </ModalHeader>
            <ModalBody>
                <Box background="neutral100">
                    <TabGroup label="Some stuff for the label" id="tabs"
                              onTabChange={selected => console.log(selected)}>
                        <Tabs>
                            <Tab>DESKTOP</Tab>
                            <Tab>MOBILE</Tab>
                        </Tabs>
                        <TabPanels>
                            <TabPanel>
                                <Box color="black" padding={2} background="neutral800">
                                    <TemplatePreview data={modifiedData}></TemplatePreview>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box color="black" padding={2} background="neutral800">
                                    Second panel
                                </Box>
                            </TabPanel>

                        </TabPanels>
                    </TabGroup>
                </Box>
            </ModalBody>
            <ModalFooter endActions={<>
                <Button onClick={() => setIsVisible(prev => !prev)}>Finish</Button>
            </>}/>
        </ModalLayout>}
    </>;
}
export default BlogPreview;


