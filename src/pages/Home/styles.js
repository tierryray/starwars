import styled from 'styled-components';

export const Container = styled.div`
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

export const CharactersContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr;
`;
