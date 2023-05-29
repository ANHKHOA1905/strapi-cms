import React from 'react';
import styled from "styled-components";

const Template = ({data}) => {

    const StyleDiv = styled.div`
      background-color: white;
      color: black;
    `
    const StyleImage = styled.img`
      width: 100%;
    `
    const Title = styled.h1`
      font-weight: bold;
      font-size: 20px;
      margin: auto;
    `

    console.log("-------------------------------")
    console.log("data preview at Tempalte", data)
    console.log("-------------------------------")

    const {title, contentZone, image} = data
    // console.log("contentzone", contentZone)
    // const htmlRaw = contentZone[0].richText

    return (
        <>
            <StyleDiv>
                <Title>{title}</Title>
                <StyleDiv >
                    <StyleImage src={image?.url} alt="image"/>
                </StyleDiv>
                {/*<div dangerouslySetInnerHTML={htmlRaw}></div>*/}
            </StyleDiv>
        </>
    );
};

export default Template;
