import React, {DOM} from 'react';
import _ from 'lodash';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

import humps from 'humps';

import request from 'superagent';

class BlogPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      posts: []
    };

    this.likeIt = this.likeIt.bind(this);
    this.searchFunc = this.searchFunc.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://u33830.netangels.ru/posts.php',
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
      }),
      DOM.div(
        {
          className: 'blog-page__right-col'
        },
        React.createElement(PieChart, {
          columns: _.map(
            this.state.posts,
            (post) => (
              [post.author || 'Anonym', post.likes || 0]
            )
          )
        })
      )
    );
  }
}

export default BlogPage;