import React from 'react';

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography
} from '@material-ui/core';

import {
  makeStyles
} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  media: {
    width: 250,
    height: 150,
  },
  root : {
    display: 'flex'
  }
}));

export const MovieScreen = ({movie}) => {
  const classes = useStyles();
  if (movie === null) {
    return <CircularProgress />
  }
  return (
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Card className={classes.root}>
        <CardMedia 
          image={movie.Poster}
          className={classes.media} 
        />
        <CardContent>
          <Typography component="h5" variant="h5">{movie.Title}</Typography>
          <Typography variant="subtitle1">{movie.Title}</Typography>
          <p>{movie.Plot}</p>
        </CardContent>
      </Card>
    </Grid>
  )
}