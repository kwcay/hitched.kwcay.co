// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import store from '../store';
import * as constants from '../constants';
import backgroundSrc from '../assets/background.jpg';

type Props = {
  children: React.ReactNode,
  message?: string,
  showHeaderFooter?: bool,
  title?: string,
}

const MainWrapper = ({ children, message, title, showHeaderFooter }: Props) => {
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
      <BackgroundFilm>
        {showHeaderFooter && (
          <Shadow />
        )}

        <Scrollable>
          <Body>
            {title && (<BodyTitle>{title}</BodyTitle>)}
            {message && (<BodyMessage>{message}</BodyMessage>)}

            {children}
          </Body>

          {showHeaderFooter && (
            <Footer>
              <FooterLink href="https://kwcay.co" target="_blank">
                &copy;2019 Kwahu &amp; Cayes
              </FooterLink>

              <FooterSeparator>|</FooterSeparator>

              <FooterLink href="mailto:hitched@kwcay.co" target="_blank" gold>
                hitched@kwcay.co
              </FooterLink>

              <FooterSeparator>|</FooterSeparator>

              <FooterLink onClick={setLanguage}>
                {constants.SUPPORTED_LANGUAGES.get(nextLanguageCode)}
              </FooterLink>
            </Footer>
          )}
        </Scrollable>
      </BackgroundFilm>
    </Background>
  );
}

const Background = styled.div`
  background: transparent center center no-repeat url('${backgroundSrc}');
  background-size: cover;
  flex-grow: 1;
  position: relative;
`;

const BackgroundFilm = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Shadow = styled.div`
  background: linear-gradient(${constants.TEXT_COLOUR}, transparent);
  display: block;
  position: fixed;
  height: 0.8rem;
  width: 100%;
  z-index: 1;
`;

const Scrollable = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Body = styled.main`
  box-sizing: border-box;
  flex-grow: 1;
  margin: 0px auto;
  max-width: 1200px;
  padding: 2rem;
  position: relative;
  width: 100%;
`;

const BodyTitle = styled.div`
  color: white;
  font-family: 'whitman-display', serif;
  font-size: 1.7rem;
  text-align: center;
  text-transform: uppercase;
  margin: auto auto 2rem auto;
`;

const BodyMessage = styled(BodyTitle)`
  text-transform: none;
  max-width: 700px;
`;

const Footer = styled.footer`
  background-color: white;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  text-align: center;
  height: 6rem;
  width: 100%;
`;

const FooterLink = styled.a`
  cursor: pointer;
  margin: auto 0.2rem;

  ${props => props.gold && css`
    color: ${constants.ACTIVE_COLOUR};
  `}
`;

const FooterSeparator = styled.span`
  display: inline-block;
  margin: auto 0.2rem;
`;

export default MainWrapper;
