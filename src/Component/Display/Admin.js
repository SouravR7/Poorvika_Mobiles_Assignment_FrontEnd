import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import Post from "./Post";
import { Box } from "@material-ui/core";
import "./Admin.css";

function Admin(props) {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //const dataRef = useRef();
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/get")
      .then((res) => {
        //console.log(res.data);

        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenClick = () => {
    setOpen(true);
  };
  const isValidate = () => {
    if (!imgURL || !date || !title || !description) {
      window.alert("*Please fill all the field");
      return;
    }
    return true;
  };
  const handleSave = () => {
    if (isValidate()) {
      axios
        .post("http://localhost:7000/api/create", {
          imgURL,
          description,
          title,
          date,
        })
        .then((res) => {
          //setData(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
    handleClose();
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:7000/api/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("errr occured", err));
  };

  const navigateToDetails = (id) => {
    props.history.replace(`/dashboard/Admin/${id}`);
  };

  return (
    <div className="Container">
      <Fab color="primary" aria-label="add" onClick={handleOpenClick}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Add any new Blog , please enter description, Title, Date here. It
            will Save
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ImageURL"
            type="ImageURL"
            fullWidth
            onChange={(event) => setImgURL(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="Title"
            fullWidth
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date"
            type="String"
            fullWidth
            onChange={(event) => setDate(event.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="description"
            type="description"
            fullWidth
            onChange={(event) => setDescription(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        marginTop="15px"
      >
        {data.map((val) => (
          <Post
            id={val._id}
            imgID={val.imgURL}
            title={val.title}
            description={val.description}
            date={val.date}
            handleDlete={handleDelete}
            navigateToDetails={navigateToDetails}
          />
        ))}
      </Box>
    </div>
  );
}

export default Admin;
