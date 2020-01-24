import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import logo from '../../assets/star-wars-logo.png';

import {
  Container,
  LogoContainer,
  CharactersContainer,
  Character,
} from './styles';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Star Wars" />
      </LogoContainer>

      <CharactersContainer>
        <ReactCardFlip isFlipped={isFlipped}>
          <Character onClick={() => setIsFlipped(!isFlipped)} />
          <Character onClick={() => setIsFlipped(!isFlipped)} />
        </ReactCardFlip>
      </CharactersContainer>
    </Container>
  );
}
