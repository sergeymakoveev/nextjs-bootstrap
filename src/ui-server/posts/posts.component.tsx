import React from 'react';

import Link from 'next/link';

import { getAuthorById, type Post } from '@/store/models';

type PostsComponentProps = { items: Post[] };

export const PostsComponent: React.FC<PostsComponentProps> = ({ items }) => (
  <section>
    <h1>Posts</h1>
    {items.map((post) => {
      const author = React.use(getAuthorById(post.authorId));
      return (
        <p key={post.id}>
          <Link href={`/authors/${author.id}`}>{author.name}</Link>
          ,&nbsp;
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </p>
      );
    })}
  </section>
);
