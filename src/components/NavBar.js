import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import LeftNav from './LeftNav';
import MainScreen from './MainScreen';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {

  const classes = useStyles();

  const [open, setOpen] = useState(false)

  const onHambergClick = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick = {onHambergClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cogito Assign
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>

    <Grid container >
    {open &&

        <Grid item sm={3} xs={2}>
        <LeftNav />
         </Grid>

    }
      <Grid item sm={9} xs={10}>
          <MainScreen />
        </Grid>
    </Grid>

    </>
  );
}
