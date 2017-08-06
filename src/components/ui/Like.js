import {PropTypes, DOM} from 'react';

const Like = (props) => (
  DOM.div(
    {
      className: `like__btn noselect ${props.liked ? 'like__btn--liked' : ''}`,
      onClick: () => props.likePost(props.id)
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
  likePost: PropTypes.func,
  id: PropTypes.number
};

export default Like;