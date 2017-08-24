import {connect} from 'react-redux';

import PostEdit from 'components/containers/PostEdit';

const stateToProps = (state) => ({
  post: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect()(PostEdit);

