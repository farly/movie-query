import React from "react";
import { 
  ListItemText,
  ListItem
} from "@material-ui/core";

import {
  Link
} from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <ListItem button>
        <Link to="/">
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/about">
          <ListItemText primary="About" />
        </Link>
      </ListItem>
    </div>
  );
}