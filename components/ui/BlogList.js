const BlogList = ( { posts } ) => (
  DOM.div(
    {
      className: 'blog-list'
    },
    _.map(
      posts,
      (post, key) => (
        React.createElement(BlogItem, { ...post, key: post.id })
      )
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        alt: PropTypes.string
      }),
      alt: PropTypes.string
    })
  ),
};
BlogList.defaultProps = {
  posts: []
};
