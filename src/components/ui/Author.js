import React, {DOM, PropTypes} from 'react';
import Link from '../elements/Link';

import {PostPath} from '../../helpers/routes';

const Author = ({author, id}) => (
  DOM.div(
    {
      className: 'blog-list__item-author'
    },
    React.createElement(Link, {
      to: PostPath(id),
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
