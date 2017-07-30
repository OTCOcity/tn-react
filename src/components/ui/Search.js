import { PropTypes, DOM } from 'react';

const Search = (props) => (
  DOM.div(
    {
      className: 'search'
    },
    DOM.input(
      {
        className: 'search__input',
        placeholder: 'Start typing a search text',
        onChange: (e) => props.searchIt(e.target.value)
      },
      null
    )
  )
);

Search.defaultProps = {
  searchIt() {
  },
};
Search.propTypes = {
  searchIt: PropTypes.func
};

export default Search;