import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import Link from 'components/elements/Link';

const MainLayout = ({children}) => (
  DOM.div(
    {className: 'app-container'},
    DOM.div(
      {className: 'page-wrap'},
      React.createElement(Header),
      children
    ),
    React.createElement(Footer)
  )
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Header = () => (
  DOM.div(
    {className: 'header'},
    DOM.h1(
      {className: 'header__title'},
      React.createElement(
        Link,
        {
          className: 'header__title-link',
          to: '/'
        },
        DOM.img(
          {
            className: 'header__title-logo',
            src: '/images/react_logo.png',
            alt: 'React blog'
          }
        ),
        'Thinknetica react course. React blog.'
      )
    )
  )
);

const Footer = () => (
  DOM.div(
    {className: 'footer'},
    'Powered by Andrey Pushkarev&nbsp;',
    DOM.a(
      {
        className: 'footer__link',
        href: 'mailto:and.pushkarev@gmail.com'
      },
      'and.pushkarev@gmail.com'
    )
  )
);
