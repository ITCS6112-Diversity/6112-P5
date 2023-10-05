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
    this.getPath = this.getPath.bind(this);
    this.userContext = this.userContext.bind(this);
  }

  getPath(){
    const path = this.props.location.pathname.split("/")[1];
    return path;
    // console.log(path);
  }

  userContext(){
    if (this.getPath() === "photos") {
      return "Photos";
    } else if (this.getPath() === "users"){
      return ("Users");
    } else {
      return ("");
    }
  }

  render() {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            ITCS 6112 Team Diversity&apos;s Photo App
          </Typography>
          <Typography>
            {this.userContext()}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const TopBarComponent = withRouter(TopBar);

export default TopBarComponent;
