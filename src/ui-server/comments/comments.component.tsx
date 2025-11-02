import React from 'react';

import Link from 'next/link';

import { getAuthorById, type Comment } from '@/store/models';

type CommentsComponentProps = { items: Comment[] };

// const useAuthorById = (authorId: number) => {
//   const author = React.use(
//     fetch(`/api/authors/${authorId}`).then((response) =>
//       response.json(),
//     ),
//   );
//   return author;
// };

export const CommentsComponent: React.FC<CommentsComponentProps> = ({
  items,
}) => {
  return (
    <section>
      <h1>Comments</h1>
      {items.map(async (comment) => {
        const author = await getAuthorById(comment.authorId);
        return (
          <section key={comment.id}>
            <p>
              {new Date(comment.date).toLocaleDateString('ru-RU')}
              &nbsp;
              <Link href={`/authors/${author.id}`}>{author.name}</Link>
              <br />
              {comment.content}
            </p>
          </section>
        );
      })}
    </section>
  );
};
