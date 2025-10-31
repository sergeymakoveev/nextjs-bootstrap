import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about',
  description: 'about page',
};

const Index = () => <h1>About [SSG]</h1>;

export default Index;
