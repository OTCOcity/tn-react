import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import BlogPage from 'components/containers/BlogPage';

import {setSearch} from 'actions/Posts';

import {filterPostsWithSearchQuery} from 'helpers/postSearch';

const stateToProps = (state) => ({
  posts: filterPostsWithSearchQuery(state.posts.entries, state.posts.search),
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionToProps = (dispatch) => ({
  searchIt: bindActionCreators(setSearch, dispatch)
});

export default connect(stateToProps, actionToProps)(BlogPage);

