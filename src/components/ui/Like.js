import {PropTypes, DOM} from 'react';

const Like = (props) => (
  DOM.div(
    {
      className: 'like__btn noselect',
      onClick: () => props.likeIt(props.id)
    },
    DOM.i({className: 'like__icon'}, null),
    DOM.span({className: 'like__text'}, `Like ${props.likes}`)
  )
);

Like.defaultProps = {
  likes: 0
};
Like.propTypes = {
  likes: PropTypes.number,
  // likeIt: PropTypes.func,
  id: PropTypes.number
};

export default Like;