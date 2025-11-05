import React from 'react';

import Link from 'next/link';

import { type Post as PostProps } from '@/store/models';
import { getAuthor } from '@/api/http';
import { ButtonLike } from '@/ui-client';
import { ButtonLikeOnServer } from '@/ui-client/button-like-on-server.component';

export const PostComponent: React.FC<PostProps> = ({
  authorId,
  title,
  content,
  date,
  id,
  likeCount,
}) => {
  const author = React.use(getAuthor(authorId));

  return (
    <section>
      <h1>Post</h1>
      <Link href={`/authors/${authorId}`}>{author.name}</Link>
      <h2>{title}</h2>
      <article>{content}</article>
      <p>
        Опубликовано: {date}
        <br />
        Голосов: {likeCount}
      </p>
      <ButtonLike count={likeCount} postId={id} />
      <ButtonLikeOnServer count={likeCount} postId={id} />
    </section>
  );
};
