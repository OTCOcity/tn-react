import request from 'superagent';

import * as types from 'constants/actionTypes/PostActionTypes';

import {API_POST_REQUEST_URL} from 'constants/API';

import humps from 'humps';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${API_POST_REQUEST_URL}?id=${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(humps.camelizeKeys(response.body)));
      });
  };
}