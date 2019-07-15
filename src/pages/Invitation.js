/**
 * Invitation page.
 *
 * @flow
 */
import React from 'react';
import i18next from 'i18next';
import api from '../api';
import store from '../store';
import * as utils from '../utils';
import * as constants from '../constants';
import Header from '../components/Header';
import Form from '../components/InvitationCodeForm';
import MainWrapper from '../components/MainWrapper';
import Details from '../components/InvitationDetails';

import type { ContextRouter } from 'react-router-dom';
import type { InvitationType } from '../constants';

type State = {
  invite: ?InvitationType,
  isFetching: bool,
  isRefreshed: bool,
}

export default class InvitationPage extends React.Component<ContextRouter, State> {
  state = {
    invite: store.getInvitation(),
    isFetching: false,
    isRefreshed: false,
  }

  componentDidMount() {
    if (this.state.invite && !this.state.isRefreshed) {
      this.fetchInvitation(this.state.invite.code);
    }
  }

  handleFetchInvitation = async (event: Object) => {
    event.preventDefault();

    // Retrieve code from form.
    const code = event.target.code.value.trim();

    if (!code) {
      return;
    }

    return await this.fetchInvitation(code);
  }

  fetchInvitation = async (code: string) => {
    this.setState(() => ({ isFetching: true }));

    try {
      const { data: invite } = await api.getInvitation(code);

      // Store the invitation details.
      store.setInvitation(invite);

      // Store the invite in state as well.
      this.setState(() => ({
        invite,
        isFetching: false,
        isRefreshed: true,
      }));
    } catch (error) {
      if (error.message === 'Request failed with status code 404') {
        alert(i18next.t('invitation.invalidCode'));
      } else {
        console.error(error);
      }

      // Reset fetching flag.
      this.setState(() => ({ isFetching: false }));
    }
  }

  /**
   * Optimistically updates an invitation.
   */
  handleUpdateInvite = (firstName: string, lastName: string, updatedGuest: Object) => {
    const invite = store.getInvitation();

    if (!invite) {
      return false;
    }

    // Find guest.
    const guestIndex = invite.guests.findIndex(guest => (
      guest.firstName === firstName && guest.lastName === lastName
    ));

    if (guestIndex < 0) {
      return false;
    }

    const guest = invite.guests[guestIndex];

    // Update guest invite.
    invite.guests.splice(guestIndex, 1, {
      ...guest,
      ...updatedGuest,
    });

    store.setInvitation(invite);
    this.setState(() => ({ invite }));

    return true;
  }

  /**
   * Accept ceremony invite.
   */
  handleAcceptCeremonyInvite = (firstName: string, lastName: string) => {
    if (!this.handleUpdateInvite(firstName, lastName, { isAttendingCeremony: constants.isAttending })) {
      return console.error('Guest not found [POST ceremony].', firstName, lastName);
    }

    return api.updateInvite(
      'accept',
      'ceremony',
      this.state.invite.code,
      firstName,
      lastName,
    );
  }

  /**
   * Accept reception invite.
   */
  handleAcceptReceptionInvite = (firstName: string, lastName: string) => {
    if (!this.handleUpdateInvite(firstName, lastName, { isAttendingReception: constants.isAttending })) {
      return console.error('Guest not found [POST reception].', firstName, lastName);
    }

    return api.updateInvite(
      'accept',
      'reception',
      this.state.invite.code,
      firstName,
      lastName,
    );
  }

  /**
   * Decline ceremony invite.
   */
  handleDeclineCeremonyInvite = (firstName: string, lastName: string) => {
    if (!this.handleUpdateInvite(firstName, lastName, { isAttendingCeremony: constants.isNotAttending })) {
      return console.error('Guest not found [DELETE ceremony].', firstName, lastName);
    }

    return api.updateInvite(
      'decline',
      'ceremony',
      this.state.invite.code,
      firstName,
      lastName,
    );
  }

  /**
   * Decline reception invite.
   */
  handleDeclineReceptionInvite = (firstName: string, lastName: string) => {
    if (!this.handleUpdateInvite(firstName, lastName, { isAttendingReception: constants.isNotAttending })) {
      return console.error('Guest not found [DELETE reception].', firstName, lastName);
    }

    return api.updateInvite(
      'decline',
      'reception',
      this.state.invite.code,
      firstName,
      lastName,
    );
  }

  render = () => {
    const { invite } = this.state;
    let title, messageLine1, messageLine2, canRespond = false;

    if (invite) {
      title = ['invitation.dearGuests', { guests: utils.guestsToString(invite.guests) }];
      messageLine1 = 'invitation.guestsMessageLine1';
      messageLine2 = 'invitation.guestsMessageLine2';

      const deadline = new Date(2019, 6, 15, 0, 25, 0).getTime();
      const currentTimestamp = new Date().getTime();
      canRespond = currentTimestamp < deadline;
    }

    return (
      <React.Fragment>
        <Header route={constants.INVITATION_ROUTE} />

        <MainWrapper
          title={title}
          messageLine1={messageLine1}
          messageLine2={messageLine2}
        >
          {invite
            ? (<Details
                canRespond={canRespond}
                invite={invite}
                onAcceptCeremony={this.handleAcceptCeremonyInvite}
                onAcceptReception={this.handleAcceptReceptionInvite}
                onDeclineCeremony={this.handleDeclineCeremonyInvite}
                onDeclineReception={this.handleDeclineReceptionInvite}
              />)
            : (<Form
                isLoading={this.state.isFetching}
                onSubmit={this.handleFetchInvitation}
              />)
          }
        </MainWrapper>
      </React.Fragment>
    );
  }
}
