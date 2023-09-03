import React, { Component } from "react";
import "../jumbotron/welcome.css"
class Welcome extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Imaginary Ebook Shop</h1>
    <p class="lead">"Leggere, in fondo, non vuol dire altro che creare un piccolo giardino all'interno della nostra memoria..."</p>
  </div>
</div>
        )
    }
}

export default Welcome;