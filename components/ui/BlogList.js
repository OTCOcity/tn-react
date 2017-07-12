import React, {DOM} from 'react';
import _ from 'lodash';

const BlogList = ( props ) => (
  DOM.div(
    {
      className: 'blog-list'
    },
    _.map(
      props.posts,
      (post, key) => (
        React.createElement(BlogItem, { ...post, key: post.id, likeIt: props.likeIt })
      )
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        alt: PropTypes.string
      }),
      alt: PropTypes.string
    })
  ),
};
BlogList.defaultProps = {
  posts: []
};

export default BlogList;