import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({tag = 'h1', classes = [], children}) => {
    {
        const HeadingTag = `${tag}`;
        return (<HeadingTag className={'title ' + classes.join(' ')}>{children}</HeadingTag>);
    }
};

Title.propTypes = {
    tag: PropTypes.string,
    classes: PropTypes.array,
    children: PropTypes.string.isRequired
};

export const Pretitle = ({classes = [], children}) => <p className={'pretitle ' + classes.join(' ')}>{children}</p>;

Pretitle.propTypes = {
    classes: PropTypes.array,
    children: PropTypes.string.isRequired
};

export const IntroText = ({classes = [], children}) => <p className={'intro-text ' + classes.join(' ')}>{children}</p>;

IntroText.propTypes = {
    classes: PropTypes.array,
    children: PropTypes.string.isRequired
};

export const Text = ({classes = [], children}) => <p className={'text ' + classes.join(' ')}>{children}</p>;

Text.propTypes = {
    classes: PropTypes.array,
    children: PropTypes.string.isRequired
};