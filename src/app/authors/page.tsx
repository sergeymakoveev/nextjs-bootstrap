import React from 'react';

import Link from 'next/link';

import type { Author } from '@/store/models';
import { getAuthors } from '@/api/http';

// ƒ  (Dynamic)  server-rendered on demand
// export const dynamic = 'force-dynamic';

const Authors: React.FC = async () => {
  const authors: Author[] = await getAuthors(
    undefined,
    // { cache: 'no-store' }, // ƒ  (Dynamic)  server-rendered on demand
    // { cache: 'force-cache' },
  );

  return (
    <section>
      <h1>authors [SSG]</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link href={`/authors/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Authors;
