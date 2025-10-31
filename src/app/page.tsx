'use client';

import React from 'react';

import styled from 'styled-components';

import { ImportIcon } from '@/ui-kit/icons';

const Header = styled.h1`
  color: #fff;
  display: flex;
`;

const Index = () => (
  <Header>
    Index <ImportIcon style={{ height: '1lh' }} />
  </Header>
);

export default Index;
