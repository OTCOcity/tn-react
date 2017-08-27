import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

const Search = (props) => (
  DOM.div(
    {
      className: 'search'
    },
    DOM.input(
      {
        className: 'search__input',
        placeholder: 'Start typing a search text',
        onChange: (e) => props.search(e.target.value)
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