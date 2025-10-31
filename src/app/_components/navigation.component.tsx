import React from 'react';

import Link from 'next/link';

export const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Index</Link>
      </li>
      <li>
        <Link href="/about">About [static]</Link>
      </li>
      <li>
        <Link href="/counter">Counter [static]</Link>
      </li>
      <li>
        <Link href="/posts">Posts [SSG]</Link>
      </li>
      <li>
        <Link href="/authors">Authors [SSR]</Link>
      </li>
    </ul>
  </nav>
);
