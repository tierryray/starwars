import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    animation: spinner 0.6s linear infinite;
    color: #1c1a21;

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
