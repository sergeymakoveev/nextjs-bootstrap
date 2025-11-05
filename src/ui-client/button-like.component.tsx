'use client';

import React from 'react';

import { patchPost } from '@/api/http';

type ButtonLikeProps = {
  postId: number;
  count?: number;
};

export const ButtonLike: React.FC<ButtonLikeProps> = ({
  count: countInit = 0,
  postId,
}) => {
  const [count, setCount] = React.useState(countInit);
  const handleClick = () => {
    void patchPost(postId, { likeCount: count + 1 }).then((data) => {
      setCount(data.likeCount ?? 0);
    });
  };
  return <button onClick={handleClick}>Like! [{count}]</button>;
};
