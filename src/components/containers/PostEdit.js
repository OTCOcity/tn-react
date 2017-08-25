import React, {DOM, PropTypes} from 'react';

import Helmet from 'react-helmet';

import {Field, reduxForm} from 'redux-form';

import {connect} from 'react-redux';

import classNames from 'classnames';

const validate = (values) => {
  const errors = {};

  if (values.author.length < 5) {
    errors.author = 'Длина заголовка не меньше 5 символов';
  }
  if (values.text.length < 15) {
    errors.text = 'Длина текста не меньше 15 символов';
  }

  return errors;
};

const renderField = ({input, label, meta: {touched, error}}) => (
  DOM.div(
    {
      className: classNames('input-group', {error})

    },
    DOM.label({}, label),
    DOM.input({...input, className: 'form-input'}),
    touched && (error && DOM.div({className: 'help-block'}, error))
  )

);

const PostEdit = ({handleSubmit}) => (
  DOM.div(
    {
      className: 'blog-page'
    },
    DOM.form(
      {
        className: 'form',
        onSubmit: handleSubmit
      },
      React.createElement(Field,
        {
          label: 'Автор',
          component: renderField,
          type: 'text',
          name: 'author',
        }
      ),
      React.createElement(Field,
        {
          label: 'text',
          component: renderField,
          type: 'textarea',
          name: 'text',
        }
      ),
      DOM.input(
        {
          type: 'submit',
          value: 'Сохранить'
        }
      ),
      React.createElement(Helmet, {
        title: 'Редактирование поста'
      })
    )
  )
);

PostEdit.propTypes = {
  post: PropTypes.object,
  isFetching: PropTypes.bool,
  likeIt: PropTypes.func
};

export default connect(
  (state) => ({
    initialValues: {
      author: state.post.entry.author,
      text: state.post.entry.text,
    }
  })
)(reduxForm({
  form: 'postEdit',
  validate,
  onSubmit: (values) => alert(JSON.stringify(values))
})(PostEdit));