import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import Like from 'components/ui/Like';

import {likePost} from 'actions/LikePost';

const stateToProps = () => ({});

const actionToProps = (dispatch) => ({
  likePost: bindActionCreators(likePost, dispatch)
});

export default connect(stateToProps, actionToProps)(Like);

