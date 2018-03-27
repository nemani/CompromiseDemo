import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import compromise from "compromise";
import SearchBox from "./SearchBox";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:
        "The event start at 9AM on monday and will end at midnight on friday."
    };
  }
  parsed(str) {
    this.setState({
      val: str
    });
  }

  render() {
    //https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
    const style = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
    let lol = "Enter text to tryout chrono";
    let results = compromise(this.state.val)
      .dates()
      .data();

    if (results[0]) {
      lol = JSON.stringify(results, null, 2);
    }

    return (
      <MuiThemeProvider>
        <div>
          <div style={style}>
            <SearchBox
              query={this.state.val}
              onQueryUpdate={this.parsed.bind(this)}
            />
            <br />
            <span style={{ fontWeight: "bold" }}>
              <a href="https://github.com/wanasit/chrono">Chrono</a>{" "}
            </span>
            Date-Words Detection Demo
          </div>
          <br />
          <br />
          <span>
            <pre>{lol}</pre>
          </span>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
