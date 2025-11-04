import React from 'react';

import { PostsComponent } from '@/ui-server';
import { getPosts } from '@/api/http';

const PostsPage: React.FC = async () => {
  const posts = await getPosts();

  return <PostsComponent items={posts} />;
};

export default PostsPage;
