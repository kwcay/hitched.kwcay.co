/**
 * Allows guests to mark themselves as attending or not.
 *
 * @flow
 */
import * as React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import * as constants from '../constants';

import type { InvitationAttendanceType } from '../constants';

type Props = {
  firstName: string,
  lastName: string,
  isAttending: InvitationAttendanceType,
  onAcceptInvitation: (firstName: string, lastName: string) => void,
  onDeclineInvitation: (firstName: string, lastName: string) => void,
}

export default (props: Props) => {
  const { t } = useTranslation();
  const fullName = `${props.firstName} ${props.lastName}`.trim();

  // Attendance
  const hasAccepted = props.isAttending === constants.isAttending ? 'done' : null;
  const hasDeclined = props.isAttending === constants.isNotAttending ? 'done' : null;

  // Update attendance.
  const acceptInvitation = hasAccepted
    ? null
    : () => props.onAcceptInvitation(props.firstName, props.lastName);

  const declineInvitation = hasDeclined
    ? null
    : () => props.onDeclineInvitation(props.firstName, props.lastName);

  return (
    <Wrapper>
      <Name>{fullName}</Name>

      <Button selected={hasAccepted} onClick={acceptInvitation}>
        {t('invitation.accept', { context: hasAccepted })}
      </Button>

      <Button selected={hasDeclined} onClick={declineInvitation}>
        {t('invitation.decline', { context: hasDeclined })}
      </Button>
    </Wrapper>
  );
}

// Supporting components
const Wrapper = styled.div`
  margin: 0.7rem 0;
`;

const Name = styled.div`
  display: inline-block;
  text-align: left;
  width: 100%;

  @media (min-width: ${constants.DEVICE_WIDTH_PHONE}) {
    width: 12rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #acaca9;
  color: #acaca9;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: border-bottom-color ${constants.TRANSITION_TIME},
    color ${constants.TRANSITION_TIME};

  margin: 0 0.2rem;
  padding: 0;
  height: 2rem;
  width: 5rem;

  &:hover {
    border-bottom-color: ${constants.ACTIVE_COLOUR};
    color: ${constants.ACTIVE_COLOUR};
  }

  ${props => props.selected && css`
    border-bottom-color: ${constants.TEXT_COLOUR};
    color: ${constants.TEXT_COLOUR};
  `}
`;
