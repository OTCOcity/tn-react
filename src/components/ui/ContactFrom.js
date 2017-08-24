import React, {DOM, PropTypes} from 'react';

import {assign, mapValues} from 'lodash/object';

class ContactFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {errors: {}};
    this.form = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.generateRef = this.generateRef.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const errors = {};
    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.indexOf('@') < 1) {
      errors.email = 'Введите корректный email';
    }
    if (!values.name || values.name.length < 3) {
      errors.name = 'Ваше имя должно быть не короче 3 символов';
    }
    if (!values.message || values.message.length < 10) {
      errors.message = 'Текст сообщения должен быть не короче 10 символов';
    }

    this.setState(assign(
      {},
      this.state,
      {errors: assign({}, errors)}
    ));
  }

  generateRef(fieldName) {
    return (input) => {this.form[fieldName] = input;};
  }

  render() {
    return DOM.div({},
      DOM.h1({}, 'Обратная связь'),
      DOM.form(
        {
          className: 'os-form',
          onSubmit: this.onSubmit
        },
        React.createElement(
          Text,
          {
            label: 'Ваше имя',
            name: 'name',
            error: this.state.errors.name,
            fieldRef: this.generateRef('name')
          }
        ),
        React.createElement(
          Text,
          {
            label: 'Email',
            name: 'email',
            error: this.state.errors.email,
            fieldRef: this.generateRef('email')
          }
        ),
        React.createElement(
          TextArea,
          {
            label: 'Сообщение',
            name: 'message',
            error: this.state.errors.message,
            fieldRef: this.generateRef('message')
          }
        ),

        DOM.input(
          {
            type: 'submit',
            value: 'Отправить'
          }
        )
      )
    );
  }
}

export default ContactFrom;

class Text extends React.Component {
  render() {
    const {label, name, fieldRef, error} = this.props;

    return DOM.label(
      {
        className: `os-form__label ${error ? 'has-error' : ''}`,
        type: 'text',
      },
      DOM.div({}, label),
      DOM.input({
        className: 'os-form__input',
        type: 'text',
        name,
        ref: fieldRef
      }),
      error && DOM.div({}, error)
    );
  }
}

Text.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fieldRef: PropTypes.func,
  error: PropTypes.string,

};

class TextArea extends React.Component {
  render() {
    const {label, name, fieldRef, error} = this.props;

    return DOM.label(
      {
        className: `os-form__label ${error ? 'has-error' : ''}`,
        type: 'text',
      },
      DOM.div({}, label),
      DOM.textarea({
        className: 'os-form__input os-form__input--textarea',
        type: 'text',
        name,
        ref: fieldRef
      }),
      error && DOM.div({}, error)
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  fieldRef: PropTypes.func,
  error: PropTypes.string,

};

