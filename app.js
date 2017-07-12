const {DOM, PropTypes} = React;
const {bind} = _;


// ------------- Helpers -------------
const fromNowDate = (date) => date ? moment(date, 'YYYY-MM-DD').fromNow() : '';


// -------------- Data ---------------
const posts = [
  {
    id: 1,
    image: {
      src: 'http://lorempixel.com/200/150/cats',
      width: 100,
      height: 100,
      alt: 'cat'
    },

    author: 'Paulo Dybala',
    createdAt: '2017-01-15',
    updatedAt: '2017-05-15',
    likes: 10

  },
  {
    id: 2,
    image: {
      src: 'http://lorempixel.com/200/150/business',
      width: 100,
      height: 100,
      alt: 'business'
    },
    text: 'Light doesn\'t necessarily travel at the speed of light. The slowest we\'ve ever recorded light moving at is 38 mph.',
    author: 'Leonel Messi',
    createdAt: '2017-05-25',
    updatedAt: '2017-05-28 17:00:00',
    likes: 15
  },
  {
    id: 3,
    image: {
      src: 'http://lorempixel.com/200/150/people',
      width: 100,
      height: 100,
      alt: 'people'
    },
    text: 'The first man to urinate on the moon was Buzz Aldrin, shortly after stepping onto the lunar surface.',
    createdAt: '2015-11-10',


  }
];

// ------------- Components -------------
class BlogPage extends React.Component {

  constructor() {
    super();
    this.state = { posts };

    this.likeIt = this.likeIt.bind(this);
  }

  likeIt(id) {
    this.setState((prevState, props) =>
      (
        {
          posts: _.map(
            this.state.posts,
            (post, key) => ((post.id === id) ? {...post, likes: ++post.likes || 1} : post)
          )
        }
      )
    );
  }
  render() {

    return DOM.div(
      {
        className: 'blog-page'
      },
      React.createElement(BlogList, { posts: this.state.posts, likeIt: this.likeIt }),
      React.createElement(PieChart, { columns:
        _.map(
          this.state.posts,
          (post, key) => (
            [post.author || 'Anonym', post.likes || 0]
          )
        )
      })
    );
  }
}



const BlogList = ( props ) => (
  DOM.div(
    {
      className: 'blog-list'
    },
    _.map(
      props.posts,
      (post, key) => (
        React.createElement(BlogItem, { ...post, key: post.id, likeIt: () => props.likeIt(post.id) })
      )
    )
  )
);

BlogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        alt: PropTypes.string
      }),
      alt: PropTypes.string
    })
  ),
};
BlogList.defaultProps = {
  posts: []
};



const BlogItem = (props) => (
  DOM.div(
    {
      className: 'blog-list__item',

    },
    React.createElement(Image, props.image),
    React.createElement(Author, {author: props.author}),
    React.createElement(DateBlock, {...props}),
    React.createElement(TextBox, {text: props.text}),
    React.createElement(Like, {likes: props.likes, id: props.id, likeIt: props.likeIt})
  )
);

BlogItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string
  }),
};



const Image = (props) => (
  DOM.img(
    {
      className: 'blog-list__item-image',
      src: props.src,
      title: props.alt,
      alt: props.alt,
      style: {
        width: `${props.width}px`,
        height: `${props.height}px`,
      }
    }
  )
);

Image.defaultProps = {
  src: 'http://lorempixel.com/200/150/cats',
  alt: 'image',
  title: 'image',
  width: 10,
  height: 10
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};


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



const DateBlock = ({createdAt, updatedAt}) => (
  DOM.div(
    {
      className: 'blog-list__item-dateblock'
    },
     DOM.div({className: 'blog-list__item-date'}, `${fromNowDate(createdAt)} | ${fromNowDate(updatedAt ? updatedAt : createdAt)}`)

  )
);

DateBlock.defaultProps = {
  createdAt: false,
  updatedAt: false
};
DateBlock.propTypes = {
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};




const Author = ({author}) => (
  DOM.div(
    {
      className: 'blog-list__item-author'
    },
    author

  )
);

Author.defaultProps = {
  author: 'Anonym'
};
Author.propTypes = {
  author: PropTypes.string
};


class Like extends React.Component {
  constructor(props) {
    super(props);

    // this.click = this.click.bind(this);
  };

  // click() {
  //   this.props.likeIt(this.props.id);
  // };

  render() {
    return DOM.div(
      {
        className: 'like__btn',
        onClick: this.props.likeIt
      },
      DOM.i({className: 'like__icon'}, null),
      DOM.span({className: 'like__text'}, `Like ${this.props.likes}`)


    )
  }
}

Like.defaultProps = {
  likes: 0
};



class PieChart extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.chart.load({
      columns: nextProps.columns
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns,
        type : 'pie'
      }
    });
  }

  render() {
    return DOM.div({ref: 'chart'}, null)
  }
}

PieChart.defaultProps = {
  columns: []
};


ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('app')
);