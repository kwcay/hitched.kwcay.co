/**
 * Displays the invitation details.
 *
 * @flow
 */
import * as React from 'react';

import type { InvitationType } from '../constants';

type Props = {
  invite: InvitationType,
}

export default (props: Props) => {


  return (
    <React.Fragment>
      Invitation details...
    </React.Fragment>
  );
};
