const BlogItem = (props) => (
  DOM.div(
    {
      src: 'blog-list__item',
    },
    React.createElement(Image, {src: props.src}),
    React.createElement(TextBox, {text: props.text}),
  )
);