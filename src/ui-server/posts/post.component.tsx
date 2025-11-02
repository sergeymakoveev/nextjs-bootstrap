import React from 'react';

import Link from 'next/link';

import { type Post as PostProps } from '@/store/models';
import { getAuthorById } from '@/api/http';
import { ButtonLike } from '@/ui-client';

export const PostComponent: React.FC<PostProps> = ({
  authorId,
  title,
  content,
  date,
  id,
  likeCount,
}) => {
  const author = React.use(getAuthorById(authorId));

  return (
    <section>
      <h1>Post</h1>
      <Link href={`/autors/${authorId}`}>{author.name}</Link>
      <h2>{title}</h2>
      <article>{content}</article>
      <p>{date}</p>
      <ButtonLike count={likeCount} postId={id} />
    </section>
  );
};
