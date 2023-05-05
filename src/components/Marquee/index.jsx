import Grid from "@material-ui/core/Grid";
import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(3, 2),
    },
    background: {
      background:
        "url(https://storage.googleapis.com/resume_assets/codioful-formerly-gradienta-G084bO4wGDA-unsplash.jpg) no-repeat center top",
      backgroundSize: "cover",
      height: "300px",
      maxHeight: "80vh",
      padding: "32px",
      [theme.breakpoints.down("sm")]: {
        height: "150px",
      },
    },
    portrait: {
      background:
        "url(https://storage.googleapis.com/resume_assets/benportrait.jpeg) no-repeat center top",
      backgroundSize: "cover",
      border: "5px solid white",
      borderRadius: "50%",
      height: "300px",
      width: "300px",
      position: "relative",
      top: "100px",
      [theme.breakpoints.down("sm")]: {
        height: "150px",
        width: "150px",
        top: "50px",
      },
    },
    flexCenterColumn: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    name: {
      color: "white",
      marginBottom: "32px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        className={classes.background}
        alignItems="flex-end"
        justify="center"
        alignContent="center"
      >
        <Grid item xs={12} sm={4} md={5}>
          <div className={classes.flexCenterColumn}>
            <div className={classes.portrait} />
          </div>
        </Grid>
        <Grid item xs={7} sm={8} md={7}>
          <Typography className={classes.name} variant="h3">
            Ben Ahlander
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
