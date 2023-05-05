import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";

const aboutText =
  "I am a certified full stack web developer with over five years of full-time font-end coding experience. I have specialized in writing front-end web applications with scalable, component architecture. I spend most of my time working with ReactJS, Javascript, and attending code meetups. I like to use modern technology to build apps that look great and are creative. I enjoy learning about new technologies and studying topics like Machine Learning and Blockchain.";

const About = () => (
  <Grid
    container
    style={{
      backgroundColor: "#607d8b",
      paddingTop: "16px",
      paddingBottom: "16px",
      paddingRight: "16px",
      paddingLeft: "16px",
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
