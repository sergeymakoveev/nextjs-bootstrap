import React from 'react';

import Link from 'next/link';

import type { Post } from '@/store/models';

const Posts: React.FC = async () => {
  const res = await fetch('http://localhost:3001/posts');
  const posts: Post[] = await res.json();

  return (
    <React.Fragment>
      <h1>Posts [SSG]</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Posts;
