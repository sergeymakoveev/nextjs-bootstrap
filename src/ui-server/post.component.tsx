import React from 'react';

import { type Post as PostProps } from '@/store/models';

import { PostComments } from '../app/posts/[id]/post-comments.component';

export const PostComponent: React.FC<PostProps> = ({
  author,
  title,
  content,
  date,
  id,
}) => (
  <section>
    <h1>Post</h1>
    <p>{author}</p>
    <p>{title}</p>
    <p>{content}</p>
    <p>{date}</p>
    <hr />
    <PostComments postId={id} />
  </section>
);
