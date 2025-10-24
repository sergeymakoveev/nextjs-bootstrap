import React from 'react';

import Link from 'next/link';

export const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Index</Link>
      </li>
      <li>
        <Link href="/about">About [SSG]</Link>
      </li>
      <li>
        <Link href="/counter">Counter</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
    </ul>
  </nav>
);
