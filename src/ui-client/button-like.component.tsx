'use client';

import React from 'react';

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
    void fetch(`/api/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likeCount: count + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.likeCount);
      });
  };
  return <button onClick={handleClick}>Like! [{count}]</button>;
};
