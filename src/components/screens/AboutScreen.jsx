import React from 'react';

import { 
  Container,
  makeStyles,
  Paper,
  Typography 
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
  },
  media: {
    width: '100%'
  },
  mediaContainer: {
    padding: theme.spacing(5)
  }
}))

export const AboutScreen = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.container}>
        <Typography variant="h3">
          About
        </Typography>

        <div className={classes.mediaContainer}>
          <img 
            src="https://magellandigital.com.au/wp-content/uploads/2018/12/cropped-Magellan-Digital-Logo-1.png"
            className={classes.media}
          />
        </div>
      </Paper>
    </Container>
  )
}