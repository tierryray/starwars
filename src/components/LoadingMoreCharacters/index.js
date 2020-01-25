import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function LoadingMoreCharacters() {
  return (
    <Container>
      <FaSpinner size={32} />
    </Container>
  );
}
