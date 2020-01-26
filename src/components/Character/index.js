import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

import {
  FaBirthdayCake,
  FaEye,
  FaTransgenderAlt,
  FaWeight,
} from 'react-icons/fa';
import { GiBodyHeight, GiSpaceship } from 'react-icons/gi';

import { FrontCard, BackCard, PicWrapper, Bio, StyledLink } from './styles';

export default function Character({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const id = data.url.match(/\d+/g);

  const backgroundURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

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
        <PicWrapper picture={backgroundURL}>
          <div className="picture" />
          <Bio>
            <div className="name">
              <h2>{data.name}</h2>
            </div>
            <div className="info">
              <div className="gender">
                <span>
                  <FaTransgenderAlt />
                  <span>Gender: </span>
                  <p> {data.gender}</p>
                </span>
              </div>
              <div className="birth">
                <span>
                  <FaBirthdayCake />
                  <span>Birth Year: </span>
                  <p>{data.birth_year}</p>
                </span>
              </div>
              <div className="eye">
                <span>
                  <FaEye />
                  <span>Eye color: </span>
                  <p>{data.eye_color}</p>
                </span>
              </div>
            </div>

            <div className="body">
              <h3>Body Data</h3>
              <div className="height">
                <span>
                  <GiBodyHeight /> Height: {data.height}
                </span>
                <progress value={data.height} max="215" />
              </div>
              <div className="mass">
                <span>
                  <FaWeight /> Mass: {data.mass}
                </span>
                <progress value={data.mass} max="120" />
              </div>
            </div>

            <StyledLink
              to={{
                pathname: '/starships',
                state: {
                  data,
                },
              }}
            >
              <small>Click here to see spaceships</small>
              <GiSpaceship size={26} />
            </StyledLink>
          </Bio>
        </PicWrapper>
      </BackCard>
    </ReactCardFlip>
  );
}

Character.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
  }).isRequired,
};
