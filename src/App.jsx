import React from "react";
import Header from "./assets/header";
import Input from "./assets/input";
import Overview from "./assets/overview";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Header />
          <Input/>
          <Overview/>
        </div>
      </>
    )
  }
}

export default App;
