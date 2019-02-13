// @flow
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as constants from '../constants';
import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';
import Card, {
  CardColumn,
  CardTitle as Title,
  CardText as Text
} from '../components/Card';

import type { ContextRouter } from 'react-router-dom';

export default (props: ContextRouter) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Header route={constants.FACTS_ROUTE} />

      <MainWrapper
        title="facts.funFacts"
        messageLine1="facts.messageLine1"
        messageLine2="facts.messageLine2"
      >
        <Card>
          <CardColumn>
            <Title>{t('facts.howWeMet')}</Title>
            <Text minHeight="130px">{t('facts.howWeMetDesc')}</Text>

            <Title>{t('facts.firstDate')}</Title>
            <Text minHeight="160px">{t('facts.firstDateDesc')}</Text>

            <Title>{t('facts.lockUp')}</Title>
            <Text>{t('facts.lockUpDesc')}</Text>
          </CardColumn>

          <CardColumn>
            <Title>{t('facts.usualDates')}</Title>
            <Text minHeight="130px">{t('facts.usualDatesDesc')}</Text>

            <Title>{t('facts.engagement')}</Title>
            <Text minHeight="160px">{t('facts.engagementDesc')}</Text>

            <Title>{t('facts.perfect')}</Title>
            <Text>{t('facts.perfectDesc')}</Text>
          </CardColumn>
        </Card>
      </MainWrapper>
    </React.Fragment>
  );
}
