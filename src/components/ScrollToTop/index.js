import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FaArrowUp } from 'react-icons/fa';
import theme from '../../styles/Theme';

const style = {
  background: theme.colors.black,
  color: theme.colors.yellow,
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
