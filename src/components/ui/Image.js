import {PropTypes, DOM} from 'react';

import {API_URL, API_IMAGE_PATH} from 'constants/API';

const Image = (props) => (
  DOM.img(
    {
      className: 'blog-list__item-image',
      src: `${API_URL}${API_IMAGE_PATH}/${props.image}`,
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
  src: '',
  alt: 'image',
  title: 'image',
  width: 50,
  height: 50
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Image;