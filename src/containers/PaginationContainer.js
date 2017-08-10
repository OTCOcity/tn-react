import {connect} from 'react-redux';

import Pagination from 'components/ui/Pagination';

const stateToProps = (state) => ({
  page: state.posts.page,
  pageCount: state.posts.pageCount,
});

export default connect(stateToProps)(Pagination);

