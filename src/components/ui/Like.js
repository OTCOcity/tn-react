import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

const Like = (props) => (
  DOM.div(
    {
      className: `like__btn noselect ${props.liked ? 'like__btn--liked' : ''}`,
      id: `like-btn-${props.id}`,
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