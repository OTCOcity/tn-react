import {PropTypes, DOM} from 'react';

const Image = (props) => (
  DOM.img(
    {
      className: 'blog-list__item-image',
      src: props.src,
      title: props.alt,
      alt: props.alt,
      style: {
        width: `${props.width}px`,
        height: `${props.height}px`,
      }
    }
  )
);

Image.defaultProps = {
  src: 'http://lorempixel.com/200/150/cats',
  alt: 'image',
  title: 'image',
  width: 10,
  height: 10
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Image;