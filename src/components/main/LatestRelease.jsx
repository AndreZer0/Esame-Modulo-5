import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import horrorBooks from "../../booksdata/horror.json";
import { nanoid } from "nanoid";

import SingleBook from "../card/SingleBook";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    const filteredBooks = horrorBooks.filter(book =>
      book.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <Container>
        <input
          type="text"
          placeholder="Cerca parola chiave"
          value={this.state.searchText}
          className="form-control my-3"
          onChange={this.handleChange}
        />
        <Row>
          <Col className="d-flex flex-wrap gap-4">
            {filteredBooks.map(book => (
              <SingleBook
                img={book.img}
                title={book.title}
                category={book.category}
                price={book.price}
                btn="Aquista"
                key={nanoid()}
                book={book}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
