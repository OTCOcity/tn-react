import React, {PropTypes, DOM} from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: props.searchQuery
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.searchFunc(event.target.value);
  }

  render() {
    return DOM.div(
      {
        className: 'search'
      },
      DOM.input(
        {
          className: 'search__input',
          placeholder: 'Start typing a search text',
          onChange: this.handleChange
        },
        null
      )
    );
  }
}

Search.defaultProps = {
  searchQuery: '',
  searchFunc() {},
};
Search.propTypes = {
  searchQuery: PropTypes.string,
  searchFunc: PropTypes.func
};

export default Search;