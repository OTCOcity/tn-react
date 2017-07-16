import React, {PropTypes} from 'react';

import Link from '../elements/Link';

import img from '../../../src/static/images/react_logo.png';

const MainLayout = ({children}) => (
  <div className="app-container">
    <div className="page-wrap">
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Header = () => (
  <div className="header">
    <h1 className="header__title">
      <Link to="/" className="header__title-link">
        <img src={img} alt="React blog" className="header__title-logo"/>
        Thinknetica react course. React blog.
      </Link>
    </h1>
  </div>
);

const Footer = () => (
  <div className="footer">
    Powered by Andrey Pushkarev&nbsp;
    <a className="footer__link" href="mailto:and.pushkarev@gmail.com">and.pushkarev@gmail.com</a>
  </div>
);
