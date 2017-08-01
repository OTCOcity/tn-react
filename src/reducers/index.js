import {combineReducers} from 'redux';

import post from 'reducers/Post';
import posts from 'reducers/Posts';

export default combineReducers({
  posts,
  post
});