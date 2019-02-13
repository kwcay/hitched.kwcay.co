/**
 * Invitation page.
 *
 * @flow
 */
import React from 'react';
import i18next from 'i18next';

import type { ContextRouter } from 'react-router-dom';

import api from '../api';
import store from '../store';
import * as utils from '../utils';
import * as constants from '../constants';
import Header from '../components/Header';
import Form from '../components/InvitationCodeForm';
import MainWrapper from '../components/MainWrapper';
import Details from '../components/InvitationDetails';

type State = {
  isFetching: bool,
}

export default class InvitationPage extends React.Component<ContextRouter, State> {
  state = {
    isFetching: false,
  }

  handleFetchInvitation = async (event: Object) => {
    event.preventDefault();

    // Retrieve code from form.
    const code = event.target.code.value.trim();

    if (!code) {
      return;
    }

    this.setState(() => ({ isFetching: true }));

    try {
      const { data } = await api.getInvitation(code);

      // Store the invitation details.
      store.setInvitation(data);
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        alert(i18next.t('invitation.invalidCode'));
      } else {
        console.error(error);
      }
    }

    // Reset fetching flag.
    this.setState(() => ({ isFetching: false }));
  }

  render = () => {
    const invite = store.getInvitation();
    let title, message;

    if (invite) {
      title = i18next.t('invitation.dearGuests', { guests: utils.guestsToString(invite.guests) });
      message = i18next.t('invitation.guestsMessage');
    }

    return (
      <React.Fragment>
        <Header route={constants.INVITATION_ROUTE} />

        <MainWrapper title={title} message={message}>
          {invite
            ? (<Details invite={invite} />)
            : (<Form isLoading={this.state.isFetching} onSubmit={this.handleFetchInvitation} />)
          }
        </MainWrapper>
      </React.Fragment>
    );
  }
}
