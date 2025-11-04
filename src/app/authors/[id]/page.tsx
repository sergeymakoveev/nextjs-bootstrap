import React from 'react';

import { CommentsComponent, PostsComponent } from '@/ui-server';
import { getAuthor, getComments, getPosts } from '@/api/http';

export default function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const authorRequest = params.then(({ id }) => getAuthor(id));
  const postsRequest = params.then(({ id }) => getPosts({ authorId: +id }));
  const commentsRequest = params.then(({ id }) =>
    getComments({ authorId: +id }),
  );

  const { name } = React.use(authorRequest);
  const posts = React.use(postsRequest);
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
