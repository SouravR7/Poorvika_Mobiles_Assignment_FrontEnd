import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SettingsPowerIcon from "@material-ui/icons/SettingsPower";
import CreateIcon from "@material-ui/icons/Create";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

export default function ListItems() {
  const handleClick = () => {
    localStorage.removeItem("login");
  };

  return (
    <div>
      <ListItem button>
        <Link to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        </Link>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button>
        <Link to="/" onClick={handleClick}>
          <ListItemIcon>
            <SettingsPowerIcon />
          </ListItemIcon>
        </Link>
        <Link to="/">
          <ListItemText primary="Logout" onClick={handleClick} />
        </Link>
      </ListItem>
    </div>
  );
}
