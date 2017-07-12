import {DOM} from 'react';

const DateBlock = ({created_at, updated_at}) => (
  DOM.div(
    {
      className: 'blog-list__item-dateblock'
    },
    DOM.div({className: 'blog-list__item-date'}, `${created_at ? moment(created_at, 'YYYY-MM-DD').fromNow() : ''}`, `${updated_at ? ' / ' + moment(updated_at, 'YYYY-MM-DD').fromNow() : ''}`)

  )
);

DateBlock.defaultProps = {
  created_at: false,
  updated_at: false
};
DateBlock.propTypes = {
  created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  updated_at: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default DateBlock;