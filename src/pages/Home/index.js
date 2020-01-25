import React, { useState } from 'react';

import logo from '../../assets/star-wars-logo.png';

import Character from '../../components/Character';

import { Container, LogoContainer, CharactersContainer } from './styles';

export default function Home() {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Star Wars" />
      </LogoContainer>

      <CharactersContainer>
        <Character />
        <Character />
        <Character />
        <Character />
      </CharactersContainer>
    </Container>
  );
}
