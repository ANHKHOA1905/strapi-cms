import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import {Button} from '@strapi/design-system';
import {ExternalLink} from '@strapi/icons';

import {getTrad} from '../../utils';
import BlogPreview from "../BlogPreview";

const PreviewButton = ({isDraft, target, url}) => {

    const [isShow, setIsShow] = useState(false);

    const {formatMessage} = useIntl();

    const handleClick = event => {
        console.log("event", event)
        if (!url) {
            event.preventDefault();
            return;
        }
        setIsShow(!isShow)
        console.log("Open Modal")
        // window.open(url, target);
    };

    return (
        <div>
            <Button
                onClick={handleClick}
                size="S"
                startIcon={<ExternalLink/>}
                variant="success"
                style={{width: '100%'}}
            >
                {formatMessage(isDraft ? {
                    id: getTrad('form.button.draft'),
                    defaultMessage: 'Open draft preview',
                } : {
                    id: getTrad('form.button.published'),
                    defaultMessage: 'Open live view',
                })}
            </Button>
            {isShow && <BlogPreview></BlogPreview>}

        </div>
    );
};

PreviewButton.propTypes = {
    isDraft: PropTypes.bool.isRequired,
    target: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default memo(PreviewButton);
