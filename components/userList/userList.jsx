import React from 'react';
import {
  Divider,
  List,
  ListItem,
  Typography,
}
from '@mui/material';
import { Link } from 'react-router-dom';
import './userList.css';

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: window.models.userListModel()
    };
  }

  render() {

    let userListItems = (
      this.state.users.map((user) => (
        <div key={user._id}>
          <ListItem className="user-list-item">
            <Link to={"/users/" + user._id}>{user.first_name + " " + user.last_name}</Link>
          </ListItem>
          <Divider/>
        </div>
      ))
    );

    return (
      <div>
        <Typography variant="h4">
          Users
        </Typography>
        <List component="nav" className="user-list">
          {userListItems}
        </List>
      </div>
    );
  }
}

export default UserList;
