// @flow
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import type { ContextRouter } from 'react-router-dom';

import store from '../store';
import * as constants from '../constants';
import MainWrapper from '../components/MainWrapper';

export default (props: ContextRouter) => {
  // List of supported languages.
  const languages = [];
  constants.SUPPORTED_LANGUAGES.forEach((name, code) => languages.push({ code, name }));

  // Language change handler.
  const { i18n } = useTranslation();
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
      <MainWrapper showHeaderFooter={false}>
        <Selector>
          {languages.map(({ code, name }) => (
            <Button key={code} data-code={code} onClick={setLanguage}>
              {name}
            </Button>
          ))}
        </Selector>
      </MainWrapper>
    </React.Fragment>
  );
}

// Supporting components
const Selector = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid transparent;
  color: ${constants.ACTIVE_COLOUR};
  cursor: pointer;
  font-size: 3rem;
  height: 5rem;
  min-width: 200px;
  transition: background-color 300ms, border-color 300ms;

  &:hover {
    border-bottom-color: ${constants.ACTIVE_COLOUR};
  }

  &:active {
    background-color: ${constants.ACTIVE_COLOUR};
    border-color: ${constants.ACTIVE_COLOUR};
  }
`;
