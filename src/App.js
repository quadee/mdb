import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import FrontPage from "../../mdb/src/containers/frontPage/frontPage";
import Header from "../../mdb/src/components/header/header";
import Footer from "../../mdb/src/components/footer/footer";
import theme from "../../mdb/src/theme";
import MoviePage from "../src/containers/moviePage/moviePage";
import TVPage from "../src/containers/tvPage/tvPage";
import PeoplePage from "../src/containers/peoplePage/peoplePage";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Route exact path="/" component={FrontPage}></Route>
          <Route path="/movie/:id/:name" component={MoviePage}></Route>
          <Route path="/tv/:id/:name" component={TVPage}></Route>
          <Route path="/person/:name/:id" component={PeoplePage}></Route>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
