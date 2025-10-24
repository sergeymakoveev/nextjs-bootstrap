'use client';

import React from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/store/store';
import { increment, decrement } from '@/store/counterSlice';

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  gap: 20px;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CounterButton = styled.button`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <PageContainer>
      <h1>Next.js with Redux Toolkit</h1>
      <CounterContainer>
        <CounterButton onClick={() => dispatch(decrement())}>-</CounterButton>
        {count}
        <CounterButton onClick={() => dispatch(increment())}>+</CounterButton>
      </CounterContainer>
    </PageContainer>
  );
}
