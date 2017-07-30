import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import Post from 'components/containers/Post';

import { likePost } from 'actions/Post';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

const actionToProps = (dispatch) => ({
  likeIt: bindActionCreators(likePost, dispatch)
});

export default connect(stateToProps, actionToProps)(Post);

