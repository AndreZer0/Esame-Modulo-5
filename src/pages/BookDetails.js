/** @format */

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentArea from '../components/comments/CommentArea';
import { Container, Row, Col } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import SingleBook from '../components/card/SingleBook';
import Context from '../context/Context';
import { PostProvider } from '../context/Context';
import horror from '../booksdata/horror.json';
import BookDetail from './BookDetail';

const BookDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErros] = useState(null);
  const [bookDetail, setBookDetail] = useState(null);
  const [selected, setSelected] = useState(false);
  const { asin } = useParams();
  const { filteredBooks, setFilteredBooks } = useContext(PostProvider);

  return (
    <>
      {filteredBooks && (
        <BookDetail
          title={filteredBooks[0].title}
          img={filteredBooks[0].img}
          category={filteredBooks[0].category}
          price={filteredBooks[0].price}
          asin={filteredBooks[0].asin}
        />
      )}
    </>
  );
};

export default BookDetails;
