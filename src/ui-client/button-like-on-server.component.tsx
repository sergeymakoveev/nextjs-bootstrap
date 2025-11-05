'use client';

import React from 'react';

import { likePostAction } from '@/ui-server/posts/posts.actions';

type ButtonLikeOnServerProps = {
  postId: number;
  count?: number;
};

export const ButtonLikeOnServer: React.FC<ButtonLikeOnServerProps> = ({
  count = 0,
  postId,
}) => {
  const handleClick = () => {
    void likePostAction(postId);
  };
  return <button onClick={handleClick}>LikeOnServer! [{count}]</button>;
};
