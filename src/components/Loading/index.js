import React from 'react';

import { WrapperLoading, Text } from './styles';

export default function Loading() {
  return (
    <div className="container">
      <WrapperLoading>
        <Text>A long loading ago, in a galaxy far, far away...</Text>
      </WrapperLoading>
    </div>
  );
}
