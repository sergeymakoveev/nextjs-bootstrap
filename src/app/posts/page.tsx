import React from 'react';

import type { Post } from '@/store/models';
import { PostsComponent } from '@/ui-server';
import { fetch } from '@/api/http';

const PostsPage: React.FC = async () => {
  const res = await fetch('/api/posts');
  const posts: Post[] = await res.json();

  return <PostsComponent items={posts} />;
};

export default PostsPage;
