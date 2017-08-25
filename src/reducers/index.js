import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import post from 'reducers/Post';
import posts from 'reducers/Posts';

export default combineReducers({
  posts,
  post,
  form: formReducer
});