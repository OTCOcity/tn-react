import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';


import Helmet from 'react-helmet';

import BlogList from 'components/ui/BlogList';
import PieChartContainer from 'containers/PieChartContainer';

const BlogPage = (props) => (

  DOM.div(
    {
      className: 'blog-page'
    },
    React.createElement(BlogList, {
      posts: props.posts,
      isFetching: props.isFetching,
      searchEnable: true,
      pageEnable: true
    }),
    DOM.div(
      {
        className: 'blog-page__right-col'
      },
      DOM.div(
        {className: 'blog-list__item '},
        React.createElement(PieChartContainer)
      )
    ),
    React.createElement(Helmet, {
      title: 'Список постов'
    })

  )
);

BlogPage.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  isFetching: PropTypes.bool,
  likeIt: PropTypes.func
};

export default BlogPage;