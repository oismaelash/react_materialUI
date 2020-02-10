import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as Icons from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  title:{
      textAlign: "center"
  }
}));

const Sidebar = () => {
  const classes = useStyles();

  const onClickButton = () => {
      alert('clicked');
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <h2 className={classes.title}>React MaterialUI</h2>
        <Divider />
        <List>
            <ListItem button onClick={onClickButton}>
                <ListItemIcon><Icons.Home /></ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={onClickButton}>
                <ListItemIcon><Icons.ViewList /></ListItemIcon>
                <ListItemText primary="View Items" />
            </ListItem>
            <ListItem button onClick={onClickButton}>
                <ListItemIcon><Icons.PlaylistAdd /></ListItemIcon>
                <ListItemText primary="Create Items" />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;