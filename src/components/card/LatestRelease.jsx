import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./release.css"

class LatestRelease extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body className="corpo">
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text className="testo">
                {this.props.category}
              </Card.Text>
              <Button  className="bottone" variant="primary">{this.props.btn}</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default LatestRelease;