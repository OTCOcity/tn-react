import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import Search from 'components/ui/Search';

import {searchPosts} from 'actions/Search';

const stateToProps = (state) => ({
  query: state.posts.search,
});

const actionToProps = (dispatch) => ({
  search: bindActionCreators(searchPosts, dispatch)
});

export default connect(stateToProps, actionToProps)(Search);

