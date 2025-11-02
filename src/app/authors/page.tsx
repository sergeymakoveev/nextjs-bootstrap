import React from 'react';

import Link from 'next/link';

import type { Author } from '@/store/models';
import { fetch } from '@/api/http';

export const dynamic = 'force-dynamic';

const Authors: React.FC = async () => {
  const authors: Author[] = await fetch('/api/authors', {
    // cache: 'no-store',
  }).then<Author[]>((response) => response.json());

  return (
    <React.Fragment>
      <h1>authors [SSG]</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <Link href={`/authors/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Authors;
