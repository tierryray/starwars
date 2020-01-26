import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-column: span 2;
  }

  @media screen and (min-width: 1024px) {
    grid-column: span 3;
  }

  @media screen and (min-width: 1440px) {
    grid-column: span 4;
  }

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
