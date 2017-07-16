import MainLayout from '../components/layouts/MainLayout';

import {PostPath} from '../helpers/routes';

import BlogPage from '../components/containers/BlogPage';
import Post from '../components/containers/Post';

const Index = {
  path: '/',
  component: BlogPage
};

const PostView = {
  path: PostPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostView
  ]
};