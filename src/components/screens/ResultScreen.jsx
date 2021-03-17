import React from 'react';

import {
  Grid,
} from '@material-ui/core'

import { MovieContainer } from './../containers/MovieContainer';

export const ResultScreen = ({data, formState}) => {
  return (
    <Grid container spacing={2}>
      {data.map(movie => (
        <MovieContainer imdbID={movie.imdbID} formState={formState}/>
      ))}
    </Grid>
  );
}