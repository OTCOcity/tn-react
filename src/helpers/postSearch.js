import {filter} from 'lodash/collection';

export const filterPostsWithSearchQuery = (posts, query) =>
  filter(posts, (post) => {
    const regExp = new RegExp(query, 'i');
    return query === '' || regExp.test(post.author + post.text);
  });