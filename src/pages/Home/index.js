import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import swapi from '../../services/api';

import Character from '../../components/Character';
import Loading from '../../components/Loading';
import LoadingMore from '../../components/LoadingMoreCharacters';
import ScrollToTop from '../../components/ScrollToTop';

import { CharactersContainer } from './styles';

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
      toast.error('Something went wrong! I have a bad feeling about this', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <CharactersContainer
            pageStart={page}
            loadMore={handleNextPage}
            hasMore={next !== null}
            loader={<LoadingMore key={0} />}
          >
            {characters.map((character, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Character key={index} data={character} />
            ))}
          </CharactersContainer>
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
