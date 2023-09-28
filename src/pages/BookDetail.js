/** @format */

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentArea from '../components/comments/CommentArea';
import './bookdet.css';
const BookDetail = ({ category, price, title, img, btn, asin }) => {
  const [selected, setSelected] = useState(false);
  // console.log(book.asin);

  const changeBorder = () => {
    setSelected(!selected);
    console.log(selected);
  };

  return (
    <Card
      className='card mx-4 mt-2'
      style={{ width: '18rem' }}>
      <Card.Img
        className={`${selected ? 'Border' : ''}`}
        onClick={changeBorder}
        variant='top'
        src={img}
      />
      <Card.Body className='corpo'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='testo'>{category}</Card.Text>
        <Card.Text className='testo'>{price}€</Card.Text>
        <Card.Text className='asin'>{asin}</Card.Text>

        <Button
          className='bottone'
          variant='success'>
          Acquista
        </Button>
      </Card.Body>
      <Card.Body className='modale'>
        {selected ? <CommentArea bookId={asin} /> : ''}
      </Card.Body>
    </Card>
  );
};

export default BookDetail;
