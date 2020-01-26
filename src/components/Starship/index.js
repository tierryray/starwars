import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactCardFlip from 'react-card-flip';

import { FrontCard, BackCard } from './styles';

export default function Starship({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const id = data.url.match(/\d+/g);

  const backgroundURL = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <FrontCard
        onClick={() => setIsFlipped(!isFlipped)}
        background={backgroundURL}
      >
        <div>
          <span>{data.name}</span>
          <p>Click to see more info</p>
        </div>
      </FrontCard>

      <BackCard onClick={() => setIsFlipped(!isFlipped)}>
        <h2>{data.name}</h2>

        <div className="info">
          <div>
            <span>Model: </span>
            <p>{data.model}</p>
          </div>
          <div>
            <span>Manufacturer:</span>
            <p>{data.manufacturer}</p>
          </div>
          <div>
            <span>Cargo capacity: </span>
            <p>{data.cargo_capacity}</p>
          </div>
          <div>
            <span>Hyperdrive rating: </span>
            <p>{data.hyperdrive_rating}</p>
          </div>
          <div>
            <span>Starship class: </span>
            <p>{data.starship_class}</p>
          </div>
        </div>
      </BackCard>
    </ReactCardFlip>
  );
}

Starship.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cargo_capacity: PropTypes.string.isRequired,
    hyperdrive_rating: PropTypes.string.isRequired,
    starship_class: PropTypes.string.isRequired,
  }).isRequired,
};
