import React from 'react';

import {
  AppBar,
  Box,
  Container,
  CssBaseline, 
  Drawer,
  Divider,
  IconButton,
  List,
  Toolbar,
  Typography
} from '@material-ui/core';

import {
  Menu,
  ChevronLeft
} from '@material-ui/icons';

import clsx from 'clsx';

import useStyles from './style';

import { Navigation } from './../components/widgets/Navigation';

const MainLayout = ({children}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <Menu />
          </IconButton>
          <Typography 
            component="h1"
            variant="h6" 
            color="inherit" 
            noWrap 
            className={classes.title}
          >
            IMDB API Query Interface
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Navigation />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </div>
  )
}

export default MainLayout;