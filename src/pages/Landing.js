// @flow
import React from 'react';

import type { ContextRouter } from 'react-router-dom';

import Frame from '../components/Frame';
import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';

import * as constants from '../constants';

export default (props: ContextRouter) => (
  <React.Fragment>
    <Header route={constants.LANDING_ROUTE} />

    <MainWrapper>
      <Frame>
        English / Fran&ccedil;ais
      </Frame>
    </MainWrapper>
  </React.Fragment>
);
