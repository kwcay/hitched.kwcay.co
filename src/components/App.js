// @flow
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import CityPage from '../pages/City';
import FactsPage from '../pages/Facts';
import InvitationPage from '../pages/Invitation';
import PhotosPage from '../pages/Photos';

import { INVITATION_PAGE } from '../constants';
import type { PageType } from '../constants';

type State = {
  page: PageType,
}

export default class App extends React.Component<{}, State> {
  state = {
    page: INVITATION_PAGE,
  }

  render = () => {
    return (
      <Router>
        <Wrapper>
          <Header page={this.state.page} />

          <Route path="/invitation" component={InvitationPage} />
          <Route path="/city" component={CityPage} />
          <Route path="/photos" component={PhotosPage} />
          <Route path="/facts" component={FactsPage} />
        </Wrapper>
      </Router>
    );
  }
}

const Wrapper = styled.div``;
