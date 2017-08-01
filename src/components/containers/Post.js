import React, {DOM, PropTypes} from 'react';

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
    })
  )
);

Post.propTypes = {
  post: PropTypes.object,
  isFetching: PropTypes.bool,
  likeIt: PropTypes.func
};

export default Post;