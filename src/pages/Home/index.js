import React, { useState, useEffect, useCallback } from 'react';
import swapi from '../../services/api';

import logo from '../../assets/star-wars-logo.png';

import Character from '../../components/Character';
import Loading from '../../components/Loading';

import { Container, LogoContainer, CharactersContainer } from './styles';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(false);

  async function getStarWarsCharacters() {
    if (!next) setLoading(true);
    try {
      const { data } = await swapi.get('/people', {
        params: {
          page,
        },
      });

      setCharacters([...characters, ...data.results]);
      setNext(data.next);
      setPage(page + 1);
    } catch (e) {
      console.log('Eita! Deu erro!');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getStarWarsCharacters();
  }, []);

  async function handleNextPage() {
    if (next) {
      await getStarWarsCharacters();
    }
  }

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Star Wars" />
      </LogoContainer>

      {loading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <CharactersContainer
            pageStart={page}
            loadMore={handleNextPage}
            hasMore={next !== null}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {characters.map((character, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Character key={index} data={character} />
            ))}
          </CharactersContainer>
        </div>
      )}
    </Container>
  );
}
