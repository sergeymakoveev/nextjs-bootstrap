import React from 'react';

import { ButtonBack } from '@/ui/button-back/button-back.component';

import { type Post as PostProps } from '../page';

export const Post: React.FC<PostProps> = ({ author, title, content, date }) => (
  <section>
    <h1>Post</h1>
    <p>{author}</p>
    <p>{title}</p>
    <p>{content}</p>
    <p>{date}</p>
    <ButtonBack />
  </section>
);
