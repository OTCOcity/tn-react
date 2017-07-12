import React, {DOM} from 'react';
import posts from '../../constants/static/posts';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';


class BlogPage extends React.Component {

  constructor() {
    super();
    this.state = {posts};

    this.likeIt = this.likeIt.bind(this);
  }

  likeIt(id) {
    this.setState(() => {
      return {
        posts: _.map(
          this.state.posts,
          (post) => (
            (post.id === id) ? {...post, likes: ++post.likes || 1} : post
          )
        )
      };
    });
  }

  render() {

    return DOM.div(
      {
        className: 'blog-page'
      },
      React.createElement(BlogList, {
        posts: this.state.posts,
        likeIt: this.likeIt
      }),
      React.createElement(PieChart, {
        columns: _.map(
          this.state.posts,
          (post) => (
            [post.author || 'Anonym', post.likes || 0]
          )
        )
      })
    );
  }
}


export default BlogPage;