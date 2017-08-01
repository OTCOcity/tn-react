import {connect} from 'react-redux';
import {map} from 'lodash/collection';

import PieChart from 'components/ui/PieChart';

const stateToProps = (state) => ({
  columns: map(
    state.posts.entries,
    (post) => (
      [post.author || 'Anonym', post.likes || 0]
    )
  )
});

export default connect(stateToProps)(PieChart);

