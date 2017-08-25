import React, {DOM} from 'react';

import Helmet from 'react-helmet';

import ContactForm from 'components/ui/ContactFrom';

const ContactPage = () => (
  DOM.div(
    {
      className: 'contact-page'
    },
    React.createElement(ContactForm, {}),
    React.createElement(Helmet, {
      title: 'Контакты'
    })

  )
);

export default ContactPage;
