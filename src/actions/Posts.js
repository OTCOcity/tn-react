import request from 'superagent';

import * as types from 'constants/actionTypes/PostsActionTypes';

import {API_POST_REQUEST_URL} from 'constants/API';

import humps from 'humps';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export const setSearch = (search) => ({
  type: types.SET_SEARCH,
  search
});


export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_POST_REQUEST_URL}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(humps.camelizeKeys(response.body)));
      });
  };
}