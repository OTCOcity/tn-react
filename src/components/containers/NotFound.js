import {DOM} from 'react';

const NotFound = () => (
  DOM.div(
    {
      className: 'blog-page'
    },
    '404: страница не найдена'
  )
);
export default NotFound;