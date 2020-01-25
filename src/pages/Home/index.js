import React, { useState, useEffect } from 'react';
import swapi from '../../services/api';

import logo from '../../assets/star-wars-logo.png';

import Character from '../../components/Character';

import { Container, LogoContainer, CharactersContainer } from './styles';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function getStarWarsCharacters() {
      const { data } = await swapi.get('/people', {
        params: {
          page,
        },
      });

      setCharacters([...characters, ...data.results]);
      setNext(data.next);
    })();
  }, [page]);

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Star Wars" />
      </LogoContainer>

      <CharactersContainer>
        {characters.map((character, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Character key={index} id={index + 1} data={character} />
        ))}
      </CharactersContainer>
    </Container>
  );
}
