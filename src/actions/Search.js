import * as types from 'constants/actionTypes/PostsActionTypes';

export const searchPosts = (query) => ({
  type: types.SET_SEARCH,
  query
});