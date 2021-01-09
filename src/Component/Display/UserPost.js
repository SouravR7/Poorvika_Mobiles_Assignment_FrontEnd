import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import "./Admin.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";
import CreateIcon from "@material-ui/icons/Create";
import { Box } from "@material-ui/core";
import axios from "axios";
import DetailPost from "./DetailPost";
const useStyles = makeStyles({
  card: {
    display: "flex",
    maxWidth: "95%",
    marginBottom: "20px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    height: 270,
    width: 150,
  },
});

function UserPost(props) {
  const classes = useStyles();
  const { imgID, title, description, date, id, navigateToDetails } = props;
  //   const handleClick = (id) => {
  //     axios
  //       .delete(`http://localhost:7000/api/delete/${id}`)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => console.log("errr occured", err));
  //   };
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea onClick={() => navigateToDetails(id)}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {" "}
                {description.substring(0, 100)}
              </Typography>
              <Typography variant="subtitle2" color="primary">
                Continue Reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={imgID}
              title={title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default UserPost;
