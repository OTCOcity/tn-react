import React, {PropTypes, DOM} from 'react';

import Image from './Image';
import TextBox from './TextBox';
import DateBlock from './DateBlock';
import Author from './Author';
import Like from './Like';

const BlogItem = (props) => (
  DOM.div(
    {
      className: `blog-list__item ${props.visible === false ? 'hide' : ''}`,
    },
    React.createElement(Image, props.image),
    React.createElement(Author, {author: props.author, id: props.id}),
    React.createElement(DateBlock, {...props}),
    React.createElement(TextBox, {text: props.text}),
    React.createElement(Like, {
      likes: props.likes,
      likeIt: props.likeIt,
      id: props.id
    })
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

BlogItem.defaultProps = {
  likes: 0,
};

export default BlogItem;