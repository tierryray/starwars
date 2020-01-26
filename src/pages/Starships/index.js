/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdArrowBack } from 'react-icons/md';
import swapi from '../../services/api';

import Starship from '../../components/Starship';
import Loading from '../../components/Loading';

import { ShipsWrapper, StarshipsContainer, R2D2 } from './styles';

import r2d2Image from '../../assets/r2d2.svg';

export default function Starships({ location }) {
  const { data: character } = location.state;
  const [loading, setLoading] = useState(false);
  const [starships, setStarships] = useState([]);
  const totalStarships = [];

  async function getAllStarships() {
    setLoading(true);
    try {
      const shipsURLs = character.starships;

      const reqs = await shipsURLs.map(ship =>
        swapi.get(ship.replace('https://swapi.co/api/', ''))
      );

      const responses = await axios.all(reqs);

      responses.map(response => totalStarships.push(response.data));

      setStarships([...starships, ...totalStarships]);
    } catch (e) {
      toast.error('Something went wrong! I have a bad feeling about this', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllStarships();
  }, []);

  return (
    <ShipsWrapper>
      <Link to="/" className="arrow">
        <MdArrowBack size={42} />
      </Link>

      {loading ? (
        <Loading />
      ) : !starships.length > 0 ? (
        <R2D2>
          <img src={r2d2Image} alt="R2D2" />
          <span>Beboobeep! He doesn't have spaceships!</span>
        </R2D2>
      ) : (
        <StarshipsContainer>
          {starships.map((d, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Starship key={index} data={d} />
          ))}
        </StarshipsContainer>
      )}
    </ShipsWrapper>
  );
}

Starships.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};
