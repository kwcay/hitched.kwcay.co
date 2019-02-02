// @flow
import * as React from 'react';
import styled from 'styled-components';

import backgroundSrc from '../assets/background.jpg';

export default ({ children }) => (
  <Background>
    <Body>
      {children}
    </Body>
  </Background>
)

const Background = styled.main`
  background: transparent center center no-repeat url('${backgroundSrc}');
  background-size: cover;
  flex-grow: 1;
`;

const Body = styled.div`
  box-sizing: border-box;
  margin: 0px auto;
  max-width: 1200px;
  padding: 5vw;
  width: 90vw;
`;
