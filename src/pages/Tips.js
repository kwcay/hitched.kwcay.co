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
      <Header route={constants.TIPS_ROUTE} />

      <MainWrapper
        title="tips.title"
        messageLine1="tips.messageLine1"
        messageLine2="tips.messageLine2"
      >
        <Card>
          <CardColumn>
            <Title>{t('tips.kwahuCayes')}</Title>
            <Text minHeight="130px">{t('tips.kwahuCayesDesc')}</Text>

            <Title>{t('tips.time')}</Title>
            <Text minHeight="185px">{t('tips.timeDesc')}</Text>

            <Title>{t('tips.gifts')}</Title>
            <Text>{t('tips.giftsDesc')}</Text>
          </CardColumn>

          <CardColumn>
            <Title>{t('tips.haitiGhana')}</Title>
            <Text minHeight="130px">{t('tips.haitiGhanaDesc')}</Text>

            <Title>{t('tips.doubleCelebration')}</Title>
            <Text minHeight="185px">{t('tips.doubleCelebrationDesc')}</Text>

            <Title>{t('general.tag')}</Title>
            <Text>{t('tips.tagDesc')}</Text>
          </CardColumn>
        </Card>
      </MainWrapper>
    </React.Fragment>
  );
}
