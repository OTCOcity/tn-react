import {PropTypes, DOM} from 'react';
import {formatDate} from 'helpers/date';

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
  createdAt: 'unknown date',
  updatedAt: 'unknown date'
};
DateBlock.propTypes = {
  createdAt: PropTypes.number,
  updatedAt: PropTypes.number
};

export default DateBlock;