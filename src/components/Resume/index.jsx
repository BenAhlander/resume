import ExpansionPannel from "../ExpansionPannel";
import Grid from "@material-ui/core/Grid";
import React from "react";

export default () => (
  <Grid container justify="center" style={{ margin: "24px 0" }}>
    <Grid item xs={12} sm={10} md={8}>
      <ExpansionPannel
        heading="Resume"
        body={
          <div style={{ height: "66vh", width: "100%" }}>
            <embed
              src="https://storage.googleapis.com/resume_assets/BenAhlanderResume2023.pdf"
              width="100%"
              height="100%"
            ></embed>
          </div>
        }
      />
    </Grid>
  </Grid>
);
