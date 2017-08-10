import React, {PropTypes, DOM} from 'react';

import Link from 'components/elements/Link';

import {map} from 'lodash/collection';

import {pagePath} from 'helpers/routes';

const Pagination = (props) => (
  DOM.div(
    {
      className: 'pagination',
    },
    map(new Array(props.pageCount), (page, index) => React.createElement(Link, {
      key: index,
      to: pagePath(index),
      className: `pagination__item ${index === props.page ? 'is-active' : ''}`,
    }, index + 1))

  )
);

Pagination.defaultProps = {
  page: 0,
  pages: 1
};
Pagination.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number
};

export default Pagination;