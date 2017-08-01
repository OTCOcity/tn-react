import * as postsTypes from 'constants/actionTypes/PostsActionTypes';

export const likePost = (id) => ({
  type: postsTypes.LIKE_POST_BY_ID,
  id
});