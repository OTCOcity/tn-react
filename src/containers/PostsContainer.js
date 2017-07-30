import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import BlogPage from 'components/containers/BlogPage';

import {filter} from 'lodash';

import {likePostById, setSearch} from 'actions/Posts';

const stateToProps = (state) => ({
  posts: filter(state.posts.entries, (post) => {
    const regExp = new RegExp(state.posts.search, 'i');
    return state.posts.search === '' || regExp.test(post.author + post.text);
  }),
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const actionToProps = (dispatch) => ({
  likeIt: bindActionCreators(likePostById, dispatch),
  searchIt: bindActionCreators(setSearch, dispatch)
});

export default connect(stateToProps, actionToProps)(BlogPage);

