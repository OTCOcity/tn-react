import React, {DOM} from 'react';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';

const BlogItem = (props) => (
  DOM.div(
    {
      className: 'blog-list__item',

    },
    React.createElement(Image, props.image),
    React.createElement(TextBox, {text: props.text}),
    React.createElement(DateBlock, {...props}),
    React.createElement(Author, {author: props.author}),
    React.createElement(Like, {likes: props.likes}),
  )
);

BlogItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
  }),
};

export default BlogItem;