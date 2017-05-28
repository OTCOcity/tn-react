const TextBox = ({text}) => (
  DOM.span(
    {
      className: 'blog-list__item-text'
    },
    text
  )
);

TextBox.defaultProps = {
  text: 'Now any text here :\'(',
};

TextBox.propTypes = {
  text: PropTypes.string
};
