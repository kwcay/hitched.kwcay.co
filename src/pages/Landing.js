// @flow
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import type { ContextRouter } from 'react-router-dom';

import store from '../store';
import Frame from '../components/Frame';
import * as constants from '../constants';
import JayneFrank from '../components/JayneFrank';
import MainWrapper from '../components/MainWrapper';

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
      <MainWrapper bodyDisplay="flex" showHeaderFooter={false}>
        <FrameWrapper>
          <Frame>
            <Wrapper>
              <JayneFrank />

              <Selector>
                {languages.map(({ code }) => (
                  <LangButton key={code} data-code={code} onClick={setLanguage}>
                    {t('general.enterSite', { lng: code })}
                  </LangButton>
                ))}
              </Selector>
            </Wrapper>
          </Frame>
        </FrameWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}

// Supporting components
const FrameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  margin: auto;
  max-width: 550px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Selector = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const LangButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: uppercase;

  height: 5rem;
  min-width: 170px;
  transition: color 300ms;

  &:active, &:hover {
    color: ${constants.ACTIVE_COLOUR};
  }
`;
