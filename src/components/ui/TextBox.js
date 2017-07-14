import {DOM, PropTypes} from 'react';


const TextBox = ({text}) => (
  DOM.div(
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

export default TextBox;