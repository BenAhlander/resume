import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/MediaCard";
import ReactLogo from "../../assets/images/Icons/react.png";
import HTMLLogo from "../../assets/images/Icons/html.png";
import CSSLogo from "../../assets/images/Icons/css.png";
import ReduxLogo from "../../assets/images/Icons/redux.png";
import MaterialLogo from "../../assets/images/Icons/material.png";
import JavaScriptLogo from "../../assets//images/Icons/javascript.png";
import Typography from "@material-ui/core/Typography";

const listIcons = [
  {
    label: "ReactJS",
    Icon: ReactLogo
  },
  {
    label: "JavaScript",
    Icon: JavaScriptLogo
  },
  {
    label: "Redux",
    Icon: ReduxLogo
  },
  {
    label: "Material UI",
    Icon: MaterialLogo
  },
  {
    label: "CSS",
    Icon: CSSLogo
  },
  {
    label: "HTML",
    Icon: HTMLLogo
  }
];

const renderIcon = ({ label, Icon }) => (
  <Grid item xs={6} sm={4} md={3} lg={2}>
    <Card title={label} img={Icon} />
  </Grid>
);

export default () => (
  <div style={{ padding: "20px" }}>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          SKILLS
        </Typography>
      </Grid>
      {listIcons.map(renderIcon)}
    </Grid>
  </div>
);
