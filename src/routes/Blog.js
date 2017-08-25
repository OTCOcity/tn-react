import MainLayout from 'components/layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';
import {postPath, postEditPath} from 'helpers/routes';

import {fetchPosts} from 'actions/Posts';
import {fetchPost} from 'actions/Post';

import PostContainer from 'containers/PostContainer';
import PostEditContainer from 'containers/PostEditContainer';
import PostsContainer from 'containers/PostsContainer';
import ContactsContainer from 'containers/ContactsContainer';
import NotFound from 'components/containers/NotFound';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store, query) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts(query.page));
  }
};

const PostView = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const PostEdit = {
  path: postEditPath(),
  component: PostEditContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const ContactsView = {
  path: '/contacts',
  component: ContactsContainer,
};

const NotFoundRoute = {
  path: '*',
  component: NotFound,
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostView,
    PostEdit,
    ContactsView,
    NotFoundRoute
  ]
};