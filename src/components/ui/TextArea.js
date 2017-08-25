import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

export default class TextArea extends React.Component {
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
