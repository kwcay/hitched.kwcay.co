// @flow
import React from 'react';

import type { ContextRouter } from 'react-router-dom';

import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';

import * as constants from '../constants';

export default (props: ContextRouter) => (
  <React.Fragment>
    <Header route={constants.FACTS_ROUTE} />

    <MainWrapper>
      Fun Facts Page
    </MainWrapper>
  </React.Fragment>
);
