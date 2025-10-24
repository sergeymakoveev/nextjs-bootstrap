import React from 'react';

import Link from 'next/link';

type DateSting = `${number}-${number}-${number}`;

export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: DateSting;
};

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
