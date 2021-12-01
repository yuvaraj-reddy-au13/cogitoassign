import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Home, Person, List, PhotoCamera, PlayCircleOutline, TabletMac, Bookmark, Storefront, Settings, ExitToApp } from '@material-ui/icons'

import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    container : {
        height : "80vh",
        // width : "10%",
        color : "white",
        paddingTop : theme.spacing(1),
        backgroundColor: theme.palette.primary.main

    },
    item : {
        display : 'flex',
        alignItems : 'center',
        marginBottom : theme.spacing(4),
        [theme.breakpoints.up('sm')] : {
            marginBottom : theme.spacing(3)
        },
        cursor : "pointer"
    },

    text : {
        marginLeft : theme.spacing(1)
        
    },

    icon : {
        marginRight : theme.spacing(1),
        [theme.breakpoints.up("sm")] : {
            fontSize : "18px"
        }
    } 
}))

const LeftNav = () => {
    const classes = useStyles();

    return (

        <Container className={classes.container}>
        <div className={classes.item}>
          <Home className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
          <Person className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
          <List className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Lists</Typography>
        </div>
        <div className={classes.item}>
          <PhotoCamera className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Camera</Typography>
        </div>
        <div className={classes.item}>
          <PlayCircleOutline className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Videos</Typography>
        </div>
        <div className={classes.item}>
          <TabletMac className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Apps</Typography>
        </div>
        <div className={classes.item}>
          <Bookmark className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Collections</Typography>
        </div>
        <div className={classes.item}>
          <Storefront className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Market Place</Typography>
        </div>
        <div className={classes.item}>
          <Settings className={classes.icon} />
          <Typography id='item-text' className={classes.text}>Settings</Typography>
        </div>
        <div className={classes.item}>
          
            <ExitToApp className={classes.icon} />
            <Typography id='item-text' className={classes.text}>Logout</Typography>
    
        </div>
      </Container>
        
    )
}

export default LeftNav ;

