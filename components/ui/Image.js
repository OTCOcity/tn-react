const Image = (props) => (
  DOM.img(
    {
      className: 'blog-list__item-image',
      src: props.src || 'http://lorempixel.com/200/150/people',
      title: props.alt,
      alt: props.alt,
      style: {
        width: (props.width || 100) + 'px',
        height: (props.height || 75) + 'px',
      }
    }
  )
);