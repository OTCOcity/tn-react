import React, { DOM, PropTypes } from 'react';

import BlogList from 'components/ui/BlogList';

import { likePost } from 'actions/Post';

import store from 'store';

class Post extends React.Component {
  constructor() {
    super();
  }

  render() {
    return DOM.div(
      {
        className: 'blog-page'
      },
      React.createElement(BlogList, {
        posts: this.props.post ? [this.props.post] : [],
        likeIt: () => store.dispatch(likePost()),
        isFetching: this.props.isFetching
      })

    );
  }
}

Post.propTypes = {
  post: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  isFetching: PropTypes.bool
};


export default Post;