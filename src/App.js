import React from 'react';

import {Router, browserHistory} from 'react-router';

import routes from 'routes';

import 'css/defaults.css';
import 'css/blog.css';
import 'css/header.css';
import 'css/footer.css';
import 'css/layout.css';

const App = () => (
  <Router history={browserHistory} routes={routes} />
);

export default App;