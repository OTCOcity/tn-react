import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  search: '',
  entries: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, {isFetching: true});
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, {error: true, isFetching: false});
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, {error: false, isFetching: false, entries: action.response });
    case types.SET_SEARCH:
      return assign({}, state, {search: action.search });
    case types.LIKE_POST_BY_ID: {
      const newEntries = assign(
        {},
        state.entries,
        {[action.id]: {...state.entries[action.id], likes: state.entries[action.id].likes + 1}});
      return assign({}, state, {entries: newEntries});
    }
    default:
      return state;
  }
}