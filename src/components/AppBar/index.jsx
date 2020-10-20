import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import Switch from "../Switch";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

//ICONS
import AboutIcon from "@material-ui/icons/Android";
import TimelineIcon from "@material-ui/icons/Timeline";
import PortfolioIcon from "@material-ui/icons/ImportContacts";
import SkillsIcon from "@material-ui/icons/Code";
import ContactIcon from "@material-ui/icons/Message";

//REACT SCROLL
// import * as Scroll from "react-scroll";
import {
  Link,
  // Element,
  // Events,
  // animateScroll as scroll,
  // scrollSpy,
  // scroller
} from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  //   appBar: {
  //     backgroundColor: "black"
  //   },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const buttons = [
  {
    label: "about",
    Icon: <AboutIcon />
  },
  {
    label: "timeline",
    Icon: <TimelineIcon />
  },
  {
    label: "portfolio",
    Icon: <PortfolioIcon />
  },
  {
    label: "skills",
    Icon: <SkillsIcon />
  },
  {
    label: "contact",
    Icon: <ContactIcon />
  }
];

const renderButton = ({ label, Icon }) => (
  <Link to={label} spy={true} smooth={true} duration={500}>
    <Button size="small" startIcon={Icon}>
      {label}
    </Button>
  </Link>
);

export default function ButtonAppBar({ isDarkTheme, setUseDarkTheme }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} color="secondary">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            {/* This takes up the space of the dark theme toggle to center the nav buttons */}
            <span style={{ width: "120px" }} />
            <Hidden smDown>
              <Grid item xs={6}>
                <Grid container justify="space-between">
                  {buttons.map(renderButton)}
                </Grid>
              </Grid>
            </Hidden>
            <Switch
              label="Dark Theme"
              isDarkTheme={isDarkTheme}
              setUseDarkTheme={setUseDarkTheme}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
