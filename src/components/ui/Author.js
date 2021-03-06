import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import Link from 'components/elements/Link';

import {postPath} from 'helpers/routes';

const Author = ({author, id}) => (
  DOM.div(
    {
      className: 'blog-list__item-author'
    },
    React.createElement(Link, {
      to: postPath(id),
      className: 'blog-list__item-author-link'
    }, author)
  )
);

Author.defaultProps = {
  author: 'Anonym'
};
Author.propTypes = {
  author: PropTypes.string
};

export default Author;
