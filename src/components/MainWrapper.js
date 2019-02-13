// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import store from '../store';
import * as constants from '../constants';
import backgroundSrc from '../assets/background.jpg';

type TranslatableType = string | Array;

type Props = {
  children: React.ReactNode,
  messageLine1?: TranslatableType,
  messageLine2?: TranslatableType,
  showHeaderFooter?: bool,
  title?: TranslatableType,
}

const MainWrapper = ({ children, messageLine1, messageLine2, title, showHeaderFooter }: Props) => {
  const { i18n, t } = useTranslation();
  const { language: currentLanguageCode } = i18n;
  const nextLanguageCode = currentLanguageCode === constants.LANG_EN
    ? constants.LANG_FR
    : constants.LANG_EN;

  // Translate title and message strings. We do this here instead of in the
  // parent component because it seems the translations don't update when
  // the language changes.
  const translateStr = (translate: TranslatableType): string => typeof translate === 'string'
    ? t(translate)
    : t(translate[0], translate[1]);
  const bodyTitle = title && translateStr(title);
  const bodyMessageLine1 = messageLine1 && translateStr(messageLine1);
  const bodyMessageLine2 = messageLine2 && translateStr(messageLine2);

  // Updates the user-defined language.
  const setLanguage = () => {
    // Update language.
    store.setLanguage(nextLanguageCode);
    i18n.changeLanguage(nextLanguageCode);
  }

  return (
    <Background>
      <BackgroundFilm>
        {/* {showHeaderFooter && (
          <Shadow />
        )} */}

        <Body>
          {bodyTitle && (<BodyTitle>{bodyTitle}</BodyTitle>)}
          {bodyMessageLine1 && (<BodyMessage noPadding={!!bodyMessageLine2}>{bodyMessageLine1}</BodyMessage>)}
          {bodyMessageLine2 && (<BodyMessage>{bodyMessageLine2}</BodyMessage>)}

          {children}
        </Body>

        {showHeaderFooter && (
          <Footer>
            <FooterLink href="https://kwcay.co" target="_blank">
              <MarginSpan>&copy;2019</MarginSpan>
              <MarginSpan>Kwahu</MarginSpan>
              <MarginSpan>&amp;</MarginSpan>
              <MarginSpan>Cayes</MarginSpan>
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
      </BackgroundFilm>
    </Background>
  );
}

MainWrapper.defaultProps = {
  childre: [],
  showHeaderFooter: true,
}

const Background = styled.div`
  background: transparent center center no-repeat url('${backgroundSrc}');
  background-size: cover;
  flex-grow: 1;
  overflow-y: scroll;
  position: relative;
`;

const BackgroundFilm = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  // display: flex;
  // flex-direction: column;
  min-height: 100%;
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
  // overflow-y: scroll;
  // overflow-x: hidden;
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
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
  margin: auto auto 2rem auto;
`;

const BodyMessage = styled(BodyTitle)`
  text-transform: none;
  max-width: 700px;
  margin-bottom: ${props => props.noPadding ? '0' : '2rem'};
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

const MarginSpan = styled.span`
  display: inline-block;
  margin: 0 0.14rem;
`;

export default MainWrapper;
