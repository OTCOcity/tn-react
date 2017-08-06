import {assign} from 'lodash';

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
      return assign({}, state, {error: false, isFetching: false, entries: action.response.posts});
    case types.SET_SEARCH:
      return assign({}, state, {search: action.query});
    case types.LIKE_POST_BY_ID: {
      if (state.entries.length === 0) {
        return state;
      } else {
        const likeInc = state.entries[action.id].liked ? -1 : 1;
        const newEntries = assign(
          {},
          state.entries,
          {[action.id]: {
            ...state.entries[action.id],
            likes: state.entries[action.id].likes + likeInc,
            liked: !state.entries[action.id].liked
          }});
        return assign({}, state, {entries: newEntries});
      }
    }
    default:
      return state;
  }
}