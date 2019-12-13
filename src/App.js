import React, { useState } from "react";
import AppBar from "./components/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import Marquee from "./components/Marquee";
import MediaCard from "./components/MediaCard";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";
import About from "./components/About";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Portfolio from "./containers/Portoflio";
import Contact from "./containers/Contact";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(true);
  let theme = createMuiTheme({
    palette: {
      type: useDarkTheme ? "dark" : "light",
      primary: blueGrey,
      secondary: {
        main: useDarkTheme ? "#000" : "#fff",
        contrastText: useDarkTheme ? "#fff" : "#000"
      }
    }
  });
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AppBar isDarkTheme={useDarkTheme} setUseDarkTheme={setUseDarkTheme} />
        <Marquee />
        <div name="about">
          <About />
        </div>
        <div name="timeline">
          <Projects useDarkTheme={useDarkTheme} />
        </div>
        <div name="portfolio">
          <Portfolio />
        </div>
        <div name="skills">
          <Skills />
        </div>
        <div name="contact">
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
