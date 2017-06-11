const Author = ({author}) => (
  DOM.div(
    {
      className: 'blog-list__item-author'
    },
    author

  )
);

Author.defaultProps = {
  author: 'Anonym'
};
Author.propTypes = {
  author: PropTypes.string
};
