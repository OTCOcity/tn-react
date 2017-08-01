import React, {PropTypes, DOM} from 'react';

import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import DateBlock from 'components/ui/DateBlock';
import Author from 'components/ui/Author';
import LikeContainer from 'containers/LikeContainer';

const BlogItem = (props) => (
  DOM.div(
    {
      className: `blog-list__item ${props.visible === false ? 'hide' : ''}`,
    },
    React.createElement(Image, props.image),
    React.createElement(Author, {author: props.author, id: props.id}),
    React.createElement(DateBlock, {...props}),
    React.createElement(TextBox, {text: props.text}),
    React.createElement(LikeContainer, {
      likes: props.likes,
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