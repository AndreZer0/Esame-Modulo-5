/** @format */

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostProvider } from '../context/Context';
import { nanoid } from 'nanoid';
import BookDetail from './BookDetail';
import MyNav from '../components/navbar/MyNav';
import Footer from '../components/footer/Footer';

const BookDetails = () => {
  const { bookasin } = useParams();
  const { filteredBooks } = useContext(PostProvider);

  const book = filteredBooks.find(item => item.asin === bookasin);

  if (!book) {
    return <div>Non ho trovato nessun libro...</div>;
  }

  const { img, title, category, price } = book;

  return (
    <>
      <MyNav />
      <BookDetail
        key={nanoid()}
        asin={bookasin}
        img={img}
        title={title}
        category={category}
        price={price}
      />
      <Footer />
    </>
  );
};

export default BookDetails;
