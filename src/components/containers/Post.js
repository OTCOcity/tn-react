import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import Helmet from 'react-helmet';

import BlogList from 'components/ui/BlogList';

const Post = (props) => (
  DOM.div(
    {
      className: 'blog-page'
    },
    React.createElement(BlogList, {
      posts: props.post ? [props.post] : [],
      isFetching: props.isFetching,
      searchEnable: false,
      pageEnable: false
    }),
    props.post && React.createElement(Helmet, {
      title: props.post.author
    })

  )
);

Post.propTypes = {
  post: PropTypes.object,
  isFetching: PropTypes.bool,
  likeIt: PropTypes.func
};

export default Post;