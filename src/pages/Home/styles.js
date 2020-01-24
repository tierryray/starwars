import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 40px;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  img {
    width: 250px;
  }
`;

export const CharactersContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
`;

export const Character = styled.div`
  width: 100%;
  height: 175px;
  background-color: ${lighten(0.07, '#0B0A0D')};
  background: url('https://starwars-visualguide.com/assets/img/characters/4.jpg')
    top center no-repeat;
  background-size: cover;
  color: #fff;
  /* border: 2px solid transparent; */
  border-radius: 8px;
  transform: translateY(1);
  transition: all 0.2s ease 0s;

  &:hover {
    border: 2px solid #f6da3a;
    transform: translateY(-7px);
  }
`;
