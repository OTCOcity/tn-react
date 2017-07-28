import React, { PropTypes, DOM } from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return DOM.div(
      {
        className: 'like__btn noselect',
        onClick: () => this.props.likeIt(this.props.id)
      },
      DOM.i({className: 'like__icon'}, null),
      DOM.span({className: 'like__text'}, `Like ${this.props.likes}`)
    );
  }
}

Like.defaultProps = {
  likes: 0
};
Like.propTypes = {
  likes: PropTypes.number,
  likeIt: PropTypes.func,
  id: PropTypes.number
};

export default Like;