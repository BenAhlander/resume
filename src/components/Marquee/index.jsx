import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import img from "../../assets/images/header-bg2.jpg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => {
  const isDarkTheme = theme.palette.type === "dark";
  return {
    root: {
      padding: theme.spacing(3, 2)
    },
    background: {
      background: `url(${img}) no-repeat center top;`,
      backgroundSize: "cover",
      height: "600px",
      maxHeight: "80vh",
      filter: isDarkTheme ? "grayscale(100%)" : null,
      padding: "16px"
    }
  };
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justify="center"
      alignContent="center"
    >
      <Grid item xs={12}>
        <Typography style={{ color: "white" }} variant="h1" align="center">
          Ben Ahlander
        </Typography>
      </Grid>
      <Grid item xs={11} sm={8} md={6}>
        <Typography style={{ color: "white" }} variant="h4" align="center">
          Full stack engineer specializing in scalable, font end, component
          architecture.
        </Typography>
      </Grid>
    </Grid>
  );
}
