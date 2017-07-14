import {PropTypes, DOM} from 'react';
import {formatDate} from '../../helpers/date';

const DateBlock = ({createdAt, updatedAt}) => (
  DOM.div(
    {
      className: 'blog-list__item-dateblock'
    },
    DOM.div(
      {
        className: 'blog-list__item-date'
      },
      `${formatDate(createdAt)}`,
      ` / ${formatDate(updatedAt)}`
    )
  )
);

DateBlock.defaultProps = {
  createdAt: false,
  updatedAt: false
};
DateBlock.propTypes = {
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default DateBlock;