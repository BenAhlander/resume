import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import Grid from "@material-ui/core/Grid";
import listProjects from "./projects";
// import MediaCard from "../../components/MediaCard";
import AboutIcon from "@material-ui/icons/Android";
import Button from "@material-ui/core/Button";
import openInNewTab from "../../utils/openInNewTab";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const renderProjectCard = (
  { header, subheader, title, key, date },
  useDarkTheme
) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: "#607d8b",
      color: useDarkTheme ? "#fff" : "#000",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #607d8b" }}
    date={date}
    iconStyle={{ background: "#607d8b", color: "#fff" }}
    icon={<AboutIcon />}
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
    {key === "chunker" ? (
      <Button
        variant="outlined"
        onClick={() => openInNewTab("https://www.chunker.com")}
        style={{ marginTop: "16px" }}
      >
        Visit Chunker
      </Button>
    ) : null}
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
