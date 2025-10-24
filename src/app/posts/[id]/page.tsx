import React from 'react';

import { type Post } from '../page';
import { Post as PostComponent } from './post.component';

export async function generateStaticParams() {
  const response = await fetch('http://localhost:3001/posts');
  const posts: Post[] = await response.json();

  return posts.map(({ id }) => ({ id: `${id}` }));
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3001/posts/${id}`);
  const post: Post = await response.json();

  return <PostComponent {...post} />;
}
