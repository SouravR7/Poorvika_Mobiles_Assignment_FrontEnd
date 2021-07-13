import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";
import axios from "axios";
import Post from "./Post";
import { Box } from "@material-ui/core";
import "./Admin.css";
import UserPost from "./UserPost";
import DetailPost from "./DetailPost";

function User(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://sportsblog-backend.herokuapp.com/api/get")
      .then((res) => {
        //console.log(res.data);

        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  const navigateToDetails = (id) => {
    props.history.replace(`/dashboard/User/${id}`);
  };
  return (
    <div className="user-Container">
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        marginTop="15px"
      >
        {data.map((val) => (
          <UserPost
            id={val._id}
            imgID={val.imgURL}
            title={val.title}
            description={val.description}
            date={val.date}
            navigateToDetails={navigateToDetails}
          />
        ))}
      </Box>
    </div>
  );
}

export default User;
