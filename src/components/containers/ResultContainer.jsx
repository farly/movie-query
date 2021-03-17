import React from 'react';
import { Redirect } from 'react-router';

import { ResultScreen } from './../screens/ResultScreen';

export const ResultContainer = (props) => {

  const { state } = props.location;

  if (!state) {
    <Redirect to="/" />
  }

  const { data, formState } = state;

  return <ResultScreen data={data} formState={formState} />
}