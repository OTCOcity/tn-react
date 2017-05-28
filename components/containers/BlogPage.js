const posts = [
  {
    id: 1,
    image: {
      src: 'http://lorempixel.com/200/150/cats',
      width: 100,
      height: 75,
      alt: 'cat'
    },
    text: 'Can cats drink milk and do they read your mind? Surprising new finds suggest it’s time to forget what you think you know about your feline companion, writes Dr John Bradshaw.'
  },
  {
    id: 2,
    image: {
      src: 'http://lorempixel.com/200/150/business',
      width: 100,
      height: 75,
      alt: 'business'
    },
    text: 'Light doesn\'t necessarily travel at the speed of light. The slowest we\'ve ever recorded light moving at is 38 mph.'
  },
  {
    id: 3,
    image: {
      src: 'http://lorempixel.com/200/150/people',
      width: 100,
      height: 75,
      alt: 'people'
    },
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