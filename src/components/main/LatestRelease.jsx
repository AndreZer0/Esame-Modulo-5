/** @format */

import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row, Form, Button } from 'react-bootstrap';

import { nanoid } from 'nanoid';
import SingleBook from '../card/SingleBook';

import { PostProvider } from '../../context/Context';

const LatestRelease = () => {
  const { filteredBooks, setFilteredBooks } = useContext(PostProvider);

  return (
    <Container>
      <Row>
        <Col className='d-flex flex-wrap gap-5 col-6'>
          {filteredBooks.map(book => (
            <SingleBook
              key={nanoid()}
              asin={book.asin}
              img={book.img}
              title={book.title}
              category={book.category}
              price={book.price}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default LatestRelease;
