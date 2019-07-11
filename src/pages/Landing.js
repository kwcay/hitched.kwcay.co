// @flow
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import type { ContextRouter } from 'react-router-dom';

import store from '../store';
import * as constants from '../constants';
import MainWrapper from '../components/MainWrapper';
import coverDesktopSrc from '../assets/cover.desktop.png';
import coverTabletSrc from '../assets/cover.tablet.png';

export default (props: ContextRouter) => {
  // List of supported languages.
  const languages = [];
  constants.SUPPORTED_LANGUAGES.forEach((name, code) => languages.push({ code, name }));

  // Language change handler.
  const { i18n, t } = useTranslation();
  const setLanguage = ({ target }: Object) => {
    const { code } = target.dataset;

    // Update language.
    store.setLanguage(code);
    i18n.changeLanguage(code);

    // Head to invitation page.
    props.history.push(constants.INVITATION_ROUTE);
  }

  return (
    <React.Fragment>
      <MainWrapper display="flex" showHeaderFooter={false}>
        <Center>
          <Cover>
            <Selector>
              {languages.map(({ code }) => (
                <LangButton key={code} data-code={code} onClick={setLanguage}>
                  {t('general.enterSite', { lng: code })}
                </LangButton>
              ))}
            </Selector>
          </Cover>
        </Center>
      </MainWrapper>
    </React.Fragment>
  );
}

// Supporting components
const Center = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Cover = styled.div`
  background: transparent center center no-repeat;
  background-image: url('${coverTabletSrc}');
  background-size: contain;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    background-image: url('${coverDesktopSrc}');
  }
`;

const Selector = styled.div`
  margin: 18vh auto;
  width: 55%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const LangButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;

  height: 3.4rem;
  transition: color 300ms;

  &:active, &:hover {
    color: #463019;
  }

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    font-size: 1.9rem;
    height: 5rem;
    min-width: 170px;
  }
`;
