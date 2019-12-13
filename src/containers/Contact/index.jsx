import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import openInNewTab from "../../utils/openInNewTab";

export default () => (
  <div style={{ marginTop: "32px" }}>
    <Paper elevation={0} style={{ padding: "30px 20px" }}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={4} sm={3}>
          <Typography align="right">CONTACT</Typography>
        </Grid>
        <Grid item xs={8} sm={3}>
          <Typography style={{ fontWeight: 900 }}>Email</Typography>
          <Typography>ben.ahlander@gmail.com</Typography>
          <Typography style={{ fontWeight: 900, marginTop: "16px" }}>
            Phone
          </Typography>
          <Typography>(801) 362-7269</Typography>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography align="right">SOCIAL</Typography>
        </Grid>
        <Grid item xs={8} sm={3}>
          <Button
            style={{ display: "block" }}
            variant="outlined"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/benahlander/")
            }
          >
            LinkedIn
          </Button>
          <Button
            style={{ display: "block", marginTop: "16px" }}
            variant="outlined"
            onClick={() => openInNewTab("https://github.com/BenAhlander")}
          >
            GitHub
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </div>
);
