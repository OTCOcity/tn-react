class Like extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: props.likes
    };

    this.likeIt = bind(this.likeIt, this);

  }

  likeIt(e) {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  render() {
    return DOM.button(
      {
        onClick: this.likeIt
      },
      `Like: ${this.state.likes}`,

    )
  }

}

Like.defaultProps = {
  likes: 0
};
