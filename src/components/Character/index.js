import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import {
  FaBirthdayCake,
  FaEye,
  FaTransgenderAlt,
  FaWeight,
} from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';

import { FrontCard, BackCard, PicWrapper, Bio } from './styles';

export default function Character() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <FrontCard onClick={() => setIsFlipped(!isFlipped)}>
        <div>
          <span>Darth Vader</span>
          <p>Click to see more info</p>
        </div>
      </FrontCard>

      <BackCard onClick={() => setIsFlipped(!isFlipped)}>
        <PicWrapper>
          <div className="picture" />
          <Bio>
            <div className="name">
              <h2>Darth Vader</h2>
            </div>
            <div className="info">
              <div className="gender">
                <span>
                  <FaTransgenderAlt />
                  Gender
                </span>
                <p>Male</p>
              </div>
              <div className="birth">
                <span>
                  <FaBirthdayCake /> Birth Year
                </span>
                <p>2019</p>
              </div>
              <div className="eye">
                <span>
                  <FaEye /> Eye color
                </span>
                <p>Blue</p>
              </div>
            </div>

            <div className="body">
              <h3>Body Data</h3>
              <div className="height">
                <span>
                  <GiBodyHeight /> Height: 177
                </span>
                <progress value="172" max="215" />
              </div>
              <div className="mass">
                <span>
                  <FaWeight /> Mass: 77
                </span>
                <progress value="77" max="120" />
              </div>
            </div>
          </Bio>
        </PicWrapper>
      </BackCard>
    </ReactCardFlip>
  );
}
