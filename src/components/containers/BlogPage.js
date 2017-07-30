import React, {DOM, PropTypes} from 'react';

import BlogList from 'components/ui/BlogList';
import PieChartContainer from 'containers/PieChartContainer';

const BlogPage = (props) => (

  DOM.div(
    {
      className: 'blog-page'
    },
    React.createElement(BlogList, {
      posts: props.posts,
      likeIt: props.likeIt,
      isFetching: props.isFetching,
      searchIt: props.searchIt,
    }),
    DOM.div(
      {
        className: 'blog-page__right-col'
      },
      DOM.div(
        {className: 'blog-list__item '},
        React.createElement(PieChartContainer)
      )
    )
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