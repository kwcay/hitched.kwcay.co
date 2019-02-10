// @flow
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import store from '../store';
import * as constants from '../constants';
import backgroundSrc from '../assets/background.jpg';

type Props = {
  children: React.ReactNode,
  showHeaderFooter: bool,
}

const MainWrapper = ({ children, showHeaderFooter }: Props) => {
  const { i18n } = useTranslation();
  const { language: currentLanguageCode } = i18n;
  const nextLanguageCode = currentLanguageCode === constants.LANG_EN
    ? constants.LANG_FR
    : constants.LANG_EN;

  // Updates the user-defined language.
  const setLanguage = () => {
    // Update language.
    store.setLanguage(nextLanguageCode);
    i18n.changeLanguage(nextLanguageCode);
  }

  return (
    <Background>
      {showHeaderFooter && (
        <Shadow />
      )}

      <Body>
        {children}
      </Body>

      {showHeaderFooter && (
        <Footer>
          <FooterLink href="https://kwcay.co" target="_blank">
            &copy;2019 Kwahu &amp; Cayes
          </FooterLink>

          &bull;

          <FooterLink onClick={setLanguage}>
            {constants.SUPPORTED_LANGUAGES.get(nextLanguageCode)}
          </FooterLink>
        </Footer>
      )}
    </Background>
  );
}

MainWrapper.defaultProps = {
  children: [],
  showHeaderFooter: true,
};

const Background = styled.div`
  background: transparent center center no-repeat url('${backgroundSrc}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

const Shadow = styled.div`
  background: linear-gradient(${constants.TEXT_COLOUR}, transparent);
  display: block;
  position: fixed;
  height: 0.8rem;
  width: 100%;
  z-index: 1;
`;

const Body = styled.main`
  flex-grow: 1;
  margin: 0px auto;
  max-width: 1200px;
  padding: 5vw;
  position: relative;
  width: 90vw;
`;

const Footer = styled.footer`
  // box-sizing: border-box;
  background-color: white;
  font-size: 0.8rem;
  text-align: center;
  padding: 30px;
  // width: 100vw;

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    padding: 40px;
  }
`;

const FooterLink = styled.a`
  cursor: pointer;
  margin: auto 0.7rem;
`;

export default MainWrapper;
