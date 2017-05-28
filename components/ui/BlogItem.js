const BlogItem = (props) => (
  DOM.div(
    {
      className: 'blog-list__item',

    },
    React.createElement(Image, props.image),
    React.createElement(TextBox, {text: props.text}),
  )
);