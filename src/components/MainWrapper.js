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

const MainWrapper = (props: Props) => {
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
  const bodyTitle = props.title && translateStr(props.title);
  const bodyMessageLine1 = props.messageLine1 && translateStr(props.messageLine1);
  const bodyMessageLine2 = props.messageLine2 && translateStr(props.messageLine2);

  // Updates the user-defined language.
  const setLanguage = () => {
    // Update language.
    store.setLanguage(nextLanguageCode);
    i18n.changeLanguage(nextLanguageCode);
  }

  return (
    <Background hasTopMargin={props.showHeaderFooter}>
      <BackgroundFilm>
        <Body hasTopMargin={props.showHeaderFooter}>
          {bodyTitle && (<BodyTitle>{bodyTitle}</BodyTitle>)}
          {bodyMessageLine1 && (<BodyMessage noPadding={!!bodyMessageLine2}>{bodyMessageLine1}</BodyMessage>)}
          {bodyMessageLine2 && (<BodyMessage>{bodyMessageLine2}</BodyMessage>)}

          {props.children}
        </Body>

        {props.showHeaderFooter && (
          <Footer>
            <FooterCentering>
              <FooterLink href="https://kwcay.co" target="_blank">
                <MarginSpan>&copy;Kwahu</MarginSpan>
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
            </FooterCentering>
          </Footer>
        )}
      </BackgroundFilm>
    </Background>
  );
}

MainWrapper.defaultProps = {
  children: [],
  showHeaderFooter: true,
}

const Background = styled.div`
  background: transparent center center no-repeat url('${backgroundSrc}');
  background-size: cover;
  box-sizing: border-box;

  display: table;
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  ${props => props.hasTopMargin && css`
    padding-top: 87.5px;
  `}
`;

const BackgroundFilm = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
  text-align: center;

  height: 100%;
  width: 100%;
`;

const Body = styled.main`
  box-sizing: border-box;
  display: table;
  height: 100%;
  width: 100%;
  margin: 0px auto;
  max-width: 1200px;
  padding: 2rem;
  position: relative;

  ${props => props.hasTopMargin && css`
    // top: 80px;
  `}
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
  justify-content: center;
  font-size: 0.8rem;
  text-align: center;
  text-transform: uppercase;

  display: table-row;
  height: 6rem;
  width: 100%;
`;

const FooterCentering = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const FooterLink = styled.a`
  cursor: pointer;
  display: inline-block;
  margin: auto 0.2rem;

  ${props => props.gold && css`
    color: ${constants.ACTIVE_COLOUR};
    font-weight: bold;
  `}
`;

const FooterSeparator = styled.span`
  display: inline-block;
  margin: auto 0.2rem;
`;

const MarginSpan = styled.span`
  display: inline-block;
  margin: 0 0.14rem;
  vertical-align: middle;
`;

export default MainWrapper;
