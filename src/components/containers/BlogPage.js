import React, { DOM, PropTypes } from 'react';
import { map, filter } from 'lodash';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

import store from 'store';

import { likePostById } from 'actions/Posts';

class BlogPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      posts: []
    };

    this.searchFunc = this.searchFunc.bind(this);
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
        posts: filter(
          this.props.posts,
          (post) =>
            new RegExp(this.state.searchQuery, 'i').test(post.author + post.text) || this.state.searchQuery.length === 0
        ),
        likeIt: (id) => store.dispatch(likePostById(id)),
        searchFunc: this.searchFunc,
        isFetching: this.props.isFetching,
      }),
      DOM.div(
        {
          className: 'blog-page__right-col'
        },
        DOM.div(
          {className: 'blog-list__item '},
          React.createElement(PieChart, {
            columns: map(
              this.props.posts,
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

BlogPage.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  isFetching: PropTypes.bool
};

export default BlogPage;