/**
 * API client.
 *
 * @flow
 */
import axios from 'axios';

import * as constants from './constants';

class Client {
  client: Function;

  constructor(): void {
    this.client = axios.create({ baseURL: constants.API_HOST });
  }

  /**
   * Retrieves an invitation.
   */
  getInvitation = async (code: string): Promise<*> => this.client.get(`/rsvp/${code}`);
}

export default new Client();
