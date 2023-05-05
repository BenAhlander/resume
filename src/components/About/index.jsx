import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const aboutText =
  "I am a certified full stack web developer with over five years of full-time font-end coding experience. I have specialized in writing front-end web applications with scalable, component architecture. I spend most of my time working with ReactJS, Javascript, and attending code meetups. I like to use modern technology to build apps that look great and are creative. I enjoy learning about new technologies and studying topics like Machine Learning and Blockchain.";

const useStyles = makeStyles((theme) => {
  return {
    portrait: {
      background:
        "url(https://storage.googleapis.com/resume_assets/benportrait.jpeg) no-repeat center top",
      backgroundSize: "cover",
      border: "5px solid white",
      borderRadius: "50%",
      position: "relative",
      height: "150px",
      width: "150px",
      top: "-135px",
    },
    flexCenterColumn: {
      display: "flex",
      height: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
      alighItems: "flex-start",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    name: {
      color: "white",
      marginTop: "40px",
      marginBottom: "16px",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  };
});

const About = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        backgroundColor: "#607d8b",
        padding: "40px",
      }}
      alignContent="center"
      justify="flex-end"
    >
      <Grid item xs={12} sm={10} md={7}>
        <div className={classes.flexCenterColumn}>
          <div className={classes.portrait} />
        </div>
        <Typography variant="h3" className={classes.name}>
          Ben Ahlander
        </Typography>
        <Typography align="left" style={{ color: "white" }}>
          ABOUT
        </Typography>
        <Typography align="left" style={{ color: "white" }}>
          {aboutText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
