import React, {PropTypes, DOM} from 'react';
import _ from 'lodash';

import BlogItem from 'components/ui/BlogItem';
import Search from 'components/ui/Search';

const BlogList = (props) => (
  DOM.div(
    {
      className: 'blog-list blog-page__left-col'
    },
    React.createElement(Search, {
      searchFunc: props.searchFunc
    }),
    _.map(
      props.posts,
      (post) => (
        React.createElement(BlogItem, {
          ...post,
          key: post.id,
          likeIt: props.likeIt
        })
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