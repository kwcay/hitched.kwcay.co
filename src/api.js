/**
 * API client.
 *
 * @flow
 */
import axios from 'axios';

import * as constants from './constants';

type ActionType =
  typeof 'accept' |
  typeof 'reception';

type EventType =
  typeof 'ceremony' |
  typeof 'reception';

class Client {
  client: Function;

  constructor(): void {
    this.client = axios.create({ baseURL: constants.API_HOST });
  }

  /**
   * Retrieves an invitation.
   */
  getInvitation = async (code: string): Promise<*> => this.client.get(`/rsvp/${code}`);

  /**
   * Update a guest's RSVP.
   */
  updateInvite = async (
    action: ActionType,
    event: EventType,
    code: string,
    firstName: string,
    lastName: string,
  ): Promise<*> => this.client.post(`/rsvp/${action}/${event}/${code}`, {
    firstName,
    lastName,
  });
}

export default new Client();
