import React from 'react';

import logo from '../../assets/star-wars-logo.png';

import {
  Container,
  LogoContainer,
  CharactersContainer,
  Character,
} from './styles';

export default function Home() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Star Wars" />
      </LogoContainer>

      <CharactersContainer>
        <Character />
        <Character />
      </CharactersContainer>
    </Container>
  );
}
