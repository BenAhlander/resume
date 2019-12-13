import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels({
  label,
  handleChange,
  isDarkTheme,
  setUseDarkTheme
}) {
  return (
    <FormControlLabel
      control={
        <Switch
          size="small"
          color="primary"
          checked={isDarkTheme}
          onChange={e => {
            setUseDarkTheme(e.target.checked);
          }}
        />
      }
      label={label}
    />
  );
}
