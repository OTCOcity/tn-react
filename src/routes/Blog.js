import MainLayout from 'components/layouts/MainLayout';

import {postPath} from 'helpers/routes';

import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';

const Index = {
  path: '/',
  component: BlogPage
};

const PostView = {
  path: postPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostView
  ]
};