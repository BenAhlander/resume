import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const aboutText =
  "I am a certified full stack web developer with over two years of full time font-end coding experience. I spend most my time working with ReactJS, Javascript, and attending code meetups. I enjoy learning about new technologies and studying topics like Machine Learning and Blockchain.";

const About = () => (
  <Grid
    container
    style={{
      backgroundColor: "#607d8b",
      paddingTop: "16px",
      paddingBottom: "16px",
      paddingRight: "16px",
      paddingLeft: "16px"
    }}
    alignContent="center"
    justify="center"
  >
    <Grid item xs={12} sm={10} md={8}>
      <Typography align="left" style={{ color: "white" }}>
        ABOUT
      </Typography>
      <Typography align="left" style={{ color: "white" }}>
        {aboutText}
      </Typography>
    </Grid>
  </Grid>
);

export default About;
