import styled from 'styled-components';

export const WrapperLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  animation: loading 3s infinite;

  @keyframes loading {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const Text = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=News+Cycle&display=swap');
  color: #4bd5ee;
  font-size: 26px;
  font-family: 'News Cycle', sans-serif;
  font-weight: bold;
  line-height: 1.35;
  text-shadow: 0px 15px 10px #bebebe;
`;
