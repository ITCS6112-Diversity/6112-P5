import React from 'react';
import {
  Typography, 
  Grid, 
  Paper
} from '@mui/material';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './userDetail.css';
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserDetail, a React component of project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.userId !== prevProps.match.params.userId){
      this.getUserData();
    }
  }

  getUserData() {
    fetchModel("http://localhost:3000/user/" + this.props.match.params.userId).then((data) => {
      console.log(data);
      this.setState({ user: data });
    });
  }
  
  render() {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));


    return (
      <div>
        {this.state.user && (
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item>
                  <Typography variant='h4'>
                    {this.state.user.data.first_name + " " + this.state.user.data.last_name}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography>
                    Location: {this.state.user.data.location}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography>
                      Description: {this.state.user.data.description}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Typography>
                      Occupation: {this.state.user.data.occupation}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <Typography>
                    <Link className="user-photos-link" to={"/photos/" + this.state.user.data._id}>Go to user photos</Link>
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Container>
        )}
      </div>
    );
  }
}

export default UserDetail;
