import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 40px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    filter: drop-shadow(0px 15px 15px #000);
    width: 250px;
    margin-top: -50px;
  }
`;
