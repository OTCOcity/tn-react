import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import {map} from 'lodash';

import BlogItem from 'components/ui/BlogItem';
import Preload from 'components/ui/Preload';
import SearchContainer from 'containers/SearchContainer';
import PaginationContainer from 'containers/PaginationContainer';

const BlogList = (props) => (
  DOM.div(
    {
      className: 'blog-list blog-page__left-col'
    },
    props.searchEnable && React.createElement(SearchContainer),
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
          key: post.id
        })
      )
    ),
    props.pageEnable && React.createElement(PaginationContainer)
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