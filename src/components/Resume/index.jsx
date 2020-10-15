import React from "react";
import Grid from "@material-ui/core/Grid";
import ExpansionPannel from "../ExpansionPannel";
import Resume from "../../assets/BenAhlanderResume.pdf";

export default () => (
  <Grid container justify="center" style={{ margin: "24px 0" }}>
    <Grid item xs={12} sm={10} md={8}>
      <ExpansionPannel
        heading="Resume"
        body={
          <div style={{ height: "66vh", width: "100%" }}>
            <embed src={Resume} width="100%" height="100%"></embed>
          </div>
        }
      />
    </Grid>
  </Grid>
);
