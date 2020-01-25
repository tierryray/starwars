import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  img {
    filter: drop-shadow(0px 10px 12px #000);
    width: 250px;
  }
`;
