/** @format */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './navbar.css';
import horror from '../../booksdata/horror.json';
import React, { useContext, useState } from 'react';
import { navLinks } from '../../data/navLinks';
import { nanoid } from 'nanoid';
import { PostProvider } from '../../context/Context';

const MyNav = () => {
  const { filteredBooks, setFilteredBooks } = useContext(PostProvider);
  console.log(filteredBooks);
  const [searchText, setSearchText] = useState('');

  const getValueForm = value => {
    if (value === '') {
      setFilteredBooks(horror);
    }
    setSearchText(value);
  };

  const filteredSub = e => {
    e.preventDefault();
    const filtrati = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredBooks(filtrati);
  };
  return (
    <Navbar
      expand='lg'
      className='bg-success'>
      <Container className='logo'>
        <a href='#'>
          <img
            src='https://img.freepik.com/premium-vector/human-tree-life-logo-coming-out-book-design-inspiration-education-vector-logo-design_722324-83.jpg?w=2000'
            alt='logo'
          />{' '}
        </a>
        <Navbar.Brand
          href='#home'
          className='titolo'>
          Epibook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            {navLinks.map(link => {
              return (
                <Nav.Link
                  key={nanoid()}
                  href={link.url}>
                  {link.label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <Form
          className='d-flex'
          onSubmit={filteredSub}>
          <Form.Control
            type='text'
            placeholder='Cerca parola chiave'
            className='me-2'
            aria-label='Search'
            onChange={e => getValueForm(e.target.value)}
            value={searchText}
          />
          <Button
            variant='light'
            type='submit'>
            Sfoglia
          </Button>
        </Form>
      </Container>
      <img
        src='https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png'
        alt='carrello'
        className='carrello'></img>
    </Navbar>
  );
};

export default MyNav;
