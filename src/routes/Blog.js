import MainLayout from 'components/layouts/MainLayout';

import {postPath} from 'helpers/routes';

import {fetchPosts} from 'actions/Posts';
import {fetchPost} from 'actions/Post';

import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostView = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostView
  ]
};