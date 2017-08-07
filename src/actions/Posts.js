import * as types from 'constants/actionTypes/PostsActionTypes';

import {API_CALL} from 'middleware/API';

export const setSearch = (search) => ({
  type: types.SET_SEARCH,
  search
});

export function fetchPosts(page = 0) {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {
        page
      },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}