const posts = [
  {
    image: 'http://lorempixel.com/200/150/cats',
    text: 'Can cats drink milk and do they read your mind? Surprising new finds suggest it’s time to forget what you think you know about your feline companion, writes Dr John Bradshaw.'
  },
  {
    image: 'http://lorempixel.com/200/150/business',
    text: 'Light doesn\'t necessarily travel at the speed of light. The slowest we\'ve ever recorded light moving at is 38 mph.'
  },
  {
    image: 'http://lorempixel.com/200/150/people',
    text: 'The first man to urinate on the moon was Buzz Aldrin, shortly after stepping onto the lunar surface.'
  }
];

class BlogPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {

    return DOM.div(
      {
        className: 'blog-page'
      },
      React.createElement(BlogList, { posts: this.state.posts })
    );
  }
}