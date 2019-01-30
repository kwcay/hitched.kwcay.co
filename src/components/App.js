// @flow
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CityPage from '../pages/City';
import FactsPage from '../pages/Facts';
import InvitationPage from '../pages/Invitation';
import LandingPage from '../pages/Landing';
import PhotosPage from '../pages/Photos';

import * as constants from '../constants';

export default class App extends React.Component {
  render = () => {
    return (
      <Router>
        <Wrapper>
          <Route path={constants.LANDING_ROUTE} exact component={LandingPage} />
          <Route path={constants.INVITATION_ROUTE} component={InvitationPage} />
          <Route path={constants.CITY_ROUTE} component={CityPage} />
          <Route path={constants.PHOTOS_ROUTE} component={PhotosPage} />
          <Route path={constants.FACTS_ROUTE} component={FactsPage} />
        </Wrapper>
      </Router>
    );
  }
}

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
