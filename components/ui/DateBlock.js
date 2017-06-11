const DateBlock = ({created_at, updated_at}) => (
  DOM.div(
    {
      className: 'blog-list__item-dateblock'
    },
    created_at && DOM.div({className: 'blog-list__item-date'}, 'Создано: ' + moment(created_at, "YYYY-MM-DD hh:mm:ss").fromNow()),
    updated_at && DOM.div({className: 'blog-list__item-date'}, 'Обновлено: ' + moment(updated_at, "YYYY-MM-DD hh:mm:ss").fromNow()),

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
