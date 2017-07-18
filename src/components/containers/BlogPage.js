import React, {DOM} from 'react';
import {map, filter} from 'lodash';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

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
    this.setState({
      searchQuery
    });
  }

  render() {
    return DOM.div(
      {
        className: 'blog-page'
      },
      React.createElement(BlogList, {
        posts: _.filter(
          this.state.posts,
          (post) =>
            new RegExp(this.state.searchQuery, 'i').test(post.author + post.text) || this.state.searchQuery.length === 0
        ),
        likeIt: this.likeIt,
        searchFunc: this.searchFunc,
      }),
      DOM.div(
        {
          className: 'blog-page__right-col'
        },
        DOM.div(
          {className: 'blog-list__item '},
          React.createElement(PieChart, {
            columns: _.map(
              this.state.posts,
              (post) => (
                [post.author || 'Anonym', post.likes || 0]
              )
            )
          })
        )
      )
    );
  }
}

export default BlogPage;