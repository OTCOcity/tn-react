import PostReducer from 'reducers/Post';

describe('Post Reducer', () => {
  it('Dislike post by id', () => {

    let state = {
      entry: {
        id: 10,
        likes: 10,
        liked: true
      }
    };
    state = PostReducer(state, {type: 'LIKE_POST_BY_ID', id: 10});

    expect(state).toEqual({
      entry: {
        id: 10,
        likes: 9,
        liked: false
      }
    });
  });

  it('Like post by id', () => {

    let state = {
      entry: {
        id: 10,
        likes: 10,
        liked: false
      }
    };
    state = PostReducer(state, {type: 'LIKE_POST_BY_ID', id: 10});

    expect(state).toEqual({
      entry: {
        id: 10,
        likes: 11,
        liked: true
      }
    });
  });
});