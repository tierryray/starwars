import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/star-wars-logo.png';

import { Wrapper, LogoContainer } from './styles';

export default function Layout({ children }) {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={logo} alt="Star Wars" />
      </LogoContainer>
      {children}
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
