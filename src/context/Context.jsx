/** @format */

import React, { useState, createContext } from 'react';
import horror from '../booksdata/horror.json';

export const PostProvider = createContext();

const Context = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [selected, setSelected] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(horror);

  return (
    <>
      <PostProvider.Provider
        value={{
          books,
          isLoading,
          errors,
          selected,
          filteredBooks,
          setFilteredBooks,
        }}>
        {children}
      </PostProvider.Provider>
    </>
  );
};

export default Context;
