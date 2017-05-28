const posts = [
  {
    id: 1,
    image: {
      src: 'http://lorempixel.com/200/150/cats',
      width: 100,
      height: 75,
      alt: 'cat'
    },

    author: 'Paulo Dybala',
    created_at: '2017-01-15',
    updated_at: '2017-05-15',
    likes: 10

  },
  {
    id: 2,
    image: {
      src: 'http://lorempixel.com/200/150/business',
      width: 100,
      height: 75,
      alt: 'business'
    },
    text: 'Light doesn\'t necessarily travel at the speed of light. The slowest we\'ve ever recorded light moving at is 38 mph.',
    author: 'Leonel Messi',
    created_at: '2017-05-25',
    updated_at: '2017-05-28 17:00:00',
    likes: 15
  },
  {
    id: 3,
    image: {
      src: 'http://lorempixel.com/200/150/people',
      width: 100,
      height: 75,
      alt: 'people'
    },
    text: 'The first man to urinate on the moon was Buzz Aldrin, shortly after stepping onto the lunar surface.',


  }
];
class BlogPage extends React.Component {

  constructor() {
    super();
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
