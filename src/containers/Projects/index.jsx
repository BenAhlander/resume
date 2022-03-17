import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Grid from "@material-ui/core/Grid";
import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/Work";
import listProjects from "./projects";

const renderProjectCard = (
  { header, subheader, title, date, isWork },
  useDarkTheme
) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#607d8b",
      color: useDarkTheme ? "#fff" : "#000",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #607d8b" }}
    date={<p style={{ color: "#fff" }}>{date}</p>}
    iconStyle={{ background: "#607d8b", color: "#fff" }}
    icon={isWork ? <WorkIcon /> : <SchoolIcon />}
  >
    <Typography variant="h5" align="left" style={{ color: "#fff" }}>
      {header}
    </Typography>
    <Typography variant="subtitle1" align="left" style={{ color: "#fff" }}>
      {subheader}
    </Typography>
    <Typography variant="body2" align="left" style={{ color: "#fff" }}>
      {title}
    </Typography>
  </VerticalTimelineElement>
);

export default ({ useDarkTheme }) => (
  <Grid container justify="center">
    <Grid item xs={12} sm={10} md={8}>
      <VerticalTimeline>
        {listProjects.map((e) => renderProjectCard(e, useDarkTheme))}
      </VerticalTimeline>
    </Grid>
  </Grid>
);
