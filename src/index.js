import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";

// import App2 from "./App-copy";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <App />;{/* app 2 Auth banco de dados  */}
      {/* <App2 /> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
