import React, { Component } from "react";
import MyNav from "./components/navbar/MyNav";
import Footer from "./components/footer/Footer";
import LatestRelease from "./components/main/LatestRelease";
import Welcome from "./components/jumbotron/Welcome";


class App extends Component{
  render(){
    return(
<>
<MyNav />
<Welcome />

<LatestRelease />
<Footer />

    
    </>
)
  }
}

export default App;
