import React, {PropTypes, DOM} from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click() {
    this.props.likeIt(this.props.id);
  }

  render() {
    return DOM.div(
      {
        className: 'like__btn',
        onClick: this.click
      },
      DOM.i({className: 'like__icon'}, null),
      DOM.span({className: 'like__text'}, `Like ${this.props.likes}`)
    );
  }
}

Like.defaultProps = {
  likes: 0,
};
Like.propTypes = {
  likes: PropTypes.number,
  likeIt: PropTypes.func,
  id: PropTypes.number,
};

export default Like;