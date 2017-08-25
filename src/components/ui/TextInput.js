import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

export default class Text extends React.Component {
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