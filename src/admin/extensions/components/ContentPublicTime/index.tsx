import React from 'react';
import {useCMEditViewDataManager} from '@strapi/helper-plugin';
import styled from "styled-components";
import {parseISO, format} from 'date-fns';
import {Typography} from '@strapi/design-system';

const ContentPublicTime: React.FC = () => {

    const Container = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
    `
    const StyleTypography = styled(Typography)`
      white-space: nowrap;
    `
    const formatDate = (date: string) => {
        const timeConverted = parseISO(date)
        return format(timeConverted, 'dd/MM/yyyy')
    }
    const {modifiedData} = useCMEditViewDataManager()
    const publishedAt: string | null = modifiedData?.publishedAt

    return (
        <Container>
            <Typography fontWeight="bold" variant="heading">{!!publishedAt && 'Published'}</Typography>
            <StyleTypography variant="body">{!!publishedAt && formatDate(publishedAt)}</StyleTypography>
        </Container>
    );
};

export default ContentPublicTime;
