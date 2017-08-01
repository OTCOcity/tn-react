import {assign} from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, state, {isFetching: true});
    case types.FETCH_POST_ERROR:
      return assign({}, state, {error: true, isFetching: false});
    case types.FETCH_POST_SUCCESS:
      return assign({}, state, {error: false, isFetching: false, entry: action.response});
    case types.LIKE_POST_BY_ID: {
      if (state.entry === null) {
        return state;
      } else {
        return assign({}, state, {entry: {...state.entry, likes: state.entry.likes + 1}});
      }
    }
    default:
      return state;
  }
}