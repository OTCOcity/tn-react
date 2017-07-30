import React, { PropTypes, DOM } from 'react';
import { map } from 'lodash';

import BlogItem from 'components/ui/BlogItem';
import Preload from 'components/ui/Preload';
import Search from 'components/ui/Search';

const BlogList = (props) => (
  DOM.div(
    {
      className: 'blog-list blog-page__left-col'
    },
    props.searchIt && React.createElement(Search, {
      searchIt: props.searchIt
    }),
    props.isFetching ? DOM.div(
      {
        className: 'blog-page__left-col'
      },
      React.createElement(Preload)
    ) : map(
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
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
};
BlogList.defaultProps = {
  posts: []
};

export default BlogList;