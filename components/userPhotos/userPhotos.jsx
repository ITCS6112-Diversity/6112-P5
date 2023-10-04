import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Divider
} from '@mui/material';
import './userPhotos.css';


/**
 * Define UserPhotos, a React componment of project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos : window.models.photoOfUserModel(props.match.params.userId)
    };
  }

  render() {


    let userPhotos = (
      this.state.photos.map((photo) => (
        <Grid item md={3} key={photo._id}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={"/images/" + photo.file_name}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Created at: <i>{photo.date_time}</i>
              </Typography>
              <Divider/>
              {
                // console.log(JSON.stringify(photo.comments))
                photo.comments === undefined ? null : photo.comments.map((comment) => (
                  <div key={comment._id}>
                    <Typography gutterBottom variant="body2" component="div">
                      <b>{comment.user.first_name + " " + comment.user.last_name}</b>
                      {" @ "}
                      <i>{comment.date_time}</i>
                      {": "}
                      {comment.comment}
                    </Typography>
                    <Divider/>
                  </div>
                ))
                // Array.isArray(photo.comments) && photo.comments.map((comment) => (
                //   console.log(comment)
                // ))
              }
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))
    );

    return (
      
      // <Typography variant="body1">
      // This should be the UserPhotos view of the PhotoShare app. Since
      // it is invoked from React Router the params from the route will be
      // in property match. So this should show details of user:
      // {this.props.match.params.userId}. You can fetch the model for the user from
      // window.models.photoOfUserModel(userId):
      //   <Typography variant="caption">
      //     {JSON.stringify(window.models.photoOfUserModel(this.props.match.params.userId))}
      //   </Typography>
      // </Typography>
      <div>
        <Grid container spacing={6}>
          {userPhotos}
        </Grid>
      </div>
    );
  }
}

export default UserPhotos;
