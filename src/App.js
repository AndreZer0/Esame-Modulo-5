import React, { Component } from "react";
import MyNav from "./components/navbar/MyNav";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main"
import Welcome from "./components/jumbotron/Welcome";

class App extends Component{
  render(){
    return(
<>
<MyNav />
<Welcome />
<Main />
<Footer />
    
    </>
)
  }
}

export default App;