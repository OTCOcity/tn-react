import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
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
  createdAt: 0,
  updatedAt: 0
};
DateBlock.propTypes = {
  createdAt: PropTypes.number,
  updatedAt: PropTypes.number
};

export default DateBlock;