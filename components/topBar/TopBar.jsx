import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@mui/material';
import './TopBar.css';
import { withRouter } from "react-router";

/**
 * Define TopBar, a React componment of project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.userContext = this.userContext.bind(this);
  }

  getPath(){
    const path = this.props.location.pathname.split("/")[1];
    return path;
  }

  getUser(){
    const userId = this.props.location.pathname.split("/")[2];
    return window.models.userModel(userId);
  }

  userContext(){
    const user = this.getUser();
    if (this.getPath() === "photos") {
      return ("Photos of " + user.first_name + " " + user.last_name);
    } else if (this.getPath() === "users"){
      return (user.first_name + " " + user.last_name);
    } else {
      return ("Select a user");
    }
  }

  render() {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar className="topbar-toolbar">
          <Typography variant="h5" color="inherit">
            ITCS 6112 Team Diversity&apos;s Photo App
          </Typography>
          <Typography variant="h5">
            {this.userContext()}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const TopBarComponent = withRouter(TopBar);

export default TopBarComponent;
