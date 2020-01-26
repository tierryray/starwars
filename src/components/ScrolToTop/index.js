import React from 'react';
import ScrollToTop from 'react-scroll-up';

import { FaArrowUp } from 'react-icons/fa';
import { pattern } from '../../styles/variables';

const style = {
  background: pattern.background,
  color: pattern.yellow,
  padding: '5px',
  borderRadius: '10px',
  boxShadow: '0 5px 20px #000',
};

export default function ScrolToTop() {
  return (
    <ScrollToTop showUnder={160} style={style}>
      <FaArrowUp size={44} />
    </ScrollToTop>
  );
}
