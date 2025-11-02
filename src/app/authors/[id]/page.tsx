import React from 'react';

import { type Comment, type Author, type Post } from '@/store/models';
import { CommentsComponent, PostsComponent } from '@/ui-server';
import { fetch } from '@/api/http';

export default function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const authorRequest = params
    .then(({ id }) => fetch(`/api/authors/${id}`))
    .then<Author>((response) => response.json());

  const { name } = React.use(authorRequest);

  const postsRequest = authorRequest
    .then(({ id }) => fetch(`/api/posts?authorId=${id}`))
    .then<Post[]>((response) => response.json());

  const posts = React.use(postsRequest);

  const commentsRequest = authorRequest
    .then(({ id }) => fetch(`/api/comments?authorId=${id}`))
    .then<Comment[]>((response) => response.json());

  const comments = React.use(commentsRequest);

  return (
    <React.Fragment>
      <h1>Author</h1>
      {name}
      <hr />
      <PostsComponent items={posts} />
      <hr />
      <CommentsComponent items={comments} />
    </React.Fragment>
  );
}
