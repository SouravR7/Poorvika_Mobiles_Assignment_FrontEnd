import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
const useStyles = makeStyles({
  cardMedia: {
    height: 470,
    width: 550,
  },
});

function DetailPost(props) {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/get/${props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="post-Container">
      <h1>{data.title}</h1>
      <div className="img-container">
        <CardMedia
          className={classes.cardMedia}
          image={data.imgURL}
          title={data.title}
        />
      </div>
      <h4>{data.date}</h4>
      <h3>{data.description}</h3>
    </div>
  );
}

export default DetailPost;
