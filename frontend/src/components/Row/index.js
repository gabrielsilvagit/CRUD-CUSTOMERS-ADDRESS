import React from 'react';

import { Container } from './styles'

export default function Row({ children }) {
  return (
    <Container gutter={16}>
      {children}
    </Container>
  );
}
