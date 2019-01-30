// @flow
import React from 'react';

import type { ContextRouter } from 'react-router-dom';

import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';

import * as constants from '../constants';

export default (props: ContextRouter) => (
  <React.Fragment>
    <Header route={constants.LANDING_ROUTE} />

    <MainWrapper>
      English / Fran&ccedil;ais
    </MainWrapper>
  </React.Fragment>
);
