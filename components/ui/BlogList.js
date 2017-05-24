const BlogList = ({posts}) => (
  DOM.div(
    {
      className: 'blog-list'
    },
    _.map(
      posts,
      (post, key) => (
        React.createElement(BlogItem, {src: post.image, text: post.text, key: key})
      )
    )
  )
);