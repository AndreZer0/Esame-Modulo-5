import React, { Component } from "react";
import  Container  from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import horrorBooks from "../../booksdata/horror.json"

import LatestRelease from "../card/LatestRelease";

class Main extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col className="d-flex flex-wrap gap-4">
                    {horrorBooks.map((book) =>(
                        <LatestRelease
                        img={book.img}
                        title={book.title}
                        category={book.category}
                        btn="Aquista"/>

                    ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main;