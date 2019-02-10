/**
 * Invitation page.
 *
 * @flow
 */
import React from 'react';

import type { ContextRouter } from 'react-router-dom';

import store from '../store';
import Header from '../components/Header';
import Form from '../components/InvitationCodeForm';
import MainWrapper from '../components/MainWrapper';
import Details from '../components/InvitationDetails';

import * as constants from '../constants';

type State = {
  isFetching: bool,
}

export default class InvitationPage extends React.Component<ContextRouter, State> {
  state = {
    isFetching: false,
  }

  render = () => {
    const invite = store.getInvitation();

    return (
      <React.Fragment>
        <Header route={constants.INVITATION_ROUTE} />

        <MainWrapper>
          {invite
            ? (<Details invite={invite} />)
            : (<Form />)
          }
        </MainWrapper>
      </React.Fragment>
    );
  }
}
