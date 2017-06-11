import {DOM} from 'react';

const Author = ({author}) => (
  DOM.div(
    {
      className: 'blog-list__item-author'
    },
    author

  )
);

Author.defaultProps = {
  author: 'Anonym'
};
Author.propTypes = {
  author: PropTypes.string
};

export default Author;
