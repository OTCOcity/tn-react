import React, {DOM} from 'react';

import BlogList from '../ui/BlogList';

import humps from 'humps';

import _ from 'lodash';

import request from 'superagent';

class Post extends React.Component {
  constructor(params) {
    super();
    this.state = {
      id: params.params.id,
      searchQuery: ''
    };
    this.likeIt = this.likeIt.bind(this);
    this.searchFunc = this.searchFunc.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      `http://u33830.netangels.ru/posts.php?id=${this.state.id}`,
      {},
      (err, res) => {
        this.setState({ posts: humps.camelizeKeys(res.body) });
      }
    );
  }


  likeIt(id) {
    this.setState(() => ({
      posts: _.map(
        this.state.posts,
        (post) => (
          (post.id === id) ? {...post, likes: ++post.likes || 1} : post
        )
      )
    }));
  }

  searchFunc(searchQuery) {
    this.setState(() => ({
      posts: _.map(
        this.state.posts,
        (post) => new RegExp(searchQuery, 'i').test(post.author + post.text) || searchQuery.length === 0
          ? {...post, visible: true}
          : {...post, visible: false}
      )
    }));
  }

  render() {
    return DOM.div(
      {
        className: 'blog-page'
      },
      React.createElement(BlogList, {
        posts: this.state.posts,
        likeIt: this.likeIt,
        searchFunc: this.searchFunc,
        searchQuery: this.state.searchQuery
      })
    );
  }
}

export default Post;