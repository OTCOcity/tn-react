const Image = (props) => (
  DOM.img(
    {
      className: 'blog-list__item-image',
      src: props.src,
      title: props.alt,
      alt: props.alt,
      style: {
        width: `${(props.width || 100)}px`,
        height: `${(props.height || 75)}px`,
      }
    }
  )
);
