// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as constants from '../constants';
import backgroundSrc from '../assets/background.jpg';

export default ({ children }) => (
  <Background>
    <Body>
      {children}
    </Body>

    <Footer>
      <FooterLink href="https://kwcay.co" target="_blank">
        &copy;2019 Kwahu &amp; Cayes
      </FooterLink>
    </Footer>
  </Background>
)

const Background = styled.div`
  background: transparent center center no-repeat url('${backgroundSrc}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Body = styled.main`
  flex-grow: 1;
  margin: 0px auto;
  max-width: 1200px;
  padding: 5vw;
  width: 90vw;
`;

const Footer = styled.footer`
  box-sizing: border-box;
  background-color: white;
  font-size: 0.8rem;
  text-align: center;
  padding: 30px;
  width: 100vw;

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    padding: 40px;
  }
`;

const FooterLink = styled.a`
  text-decoration: underline;
`;
