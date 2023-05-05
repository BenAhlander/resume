import CSSLogo from "../../assets/Icons/css.png";
import Card from "../../components/MediaCard";
import Grid from "@material-ui/core/Grid";
import HTMLLogo from "../../assets/Icons/html.png";
import JavaScriptLogo from "../../assets//Icons/javascript.png";
import MaterialLogo from "../../assets/Icons/material.png";
import React from "react";
import ReactLogo from "../../assets/Icons/react.png";
import ReduxLogo from "../../assets/Icons/redux.png";
import Typography from "@material-ui/core/Typography";

const listIcons = [
  {
    label: "ReactJS",
    Icon: ReactLogo,
  },
  {
    label: "JavaScript",
    Icon: JavaScriptLogo,
  },
  {
    label: "Redux",
    Icon: ReduxLogo,
  },
  {
    label: "Material UI",
    Icon: MaterialLogo,
  },
  {
    label: "CSS",
    Icon: CSSLogo,
  },
  {
    label: "HTML",
    Icon: HTMLLogo,
  },
];

const renderIcon = ({ label, Icon }) => (
  <Grid item xs={6} sm={4} md={4} lg={4} xl={2}>
    <Card title={label} img={Icon} />
  </Grid>
);

export default () => (
  <div style={{ padding: "20px" }}>
    <Grid container justify="center">
      <Grid item xs={12} sm={10}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              SKILLS
            </Typography>
          </Grid>
          {listIcons.map(renderIcon)}
        </Grid>
      </Grid>
    </Grid>
  </div>
);
