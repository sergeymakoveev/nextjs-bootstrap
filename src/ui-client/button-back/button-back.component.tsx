'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

type ButtonBackProps = React.ComponentProps<'button'>;

export const ButtonBack: React.FC<ButtonBackProps> = ({
  children = 'go back',
  ...props
}) => {
  const router = useRouter();
  return (
    <button {...props} onClick={() => router.push('/posts')}>
      {children}
    </button>
  );
};
