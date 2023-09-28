/** @format */

import React, { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import './comment.css';
import { Trash } from 'react-bootstrap-icons';
import { Pencil } from 'react-bootstrap-icons';

const CommentArea = ({ book, bookId }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  console.log(username);

  const [rate, setRate] = useState('');
  console.log(rate);

  const [recensione, setRecensione] = useState('');
  console.log(recensione);

  const [refresh, setRefresh] = useState(false);
  console.log(bookId);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState('');
  const [editedRate, setEditedRate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  console.log(comments);
  const Url = `https://striveschool-api.herokuapp.com/api/comments/`;

  const empty = () => {
    setUsername('');
    setRecensione('');
    setRate('');
  };

  const getResponse = async () => {
    const urlAsin = Url + bookId;

    try {
      const response = await fetch(urlAsin, {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEyZThmMTBjNThjZTAwMTRlNmFjOTYiLCJpYXQiOjE2OTU3MzgwOTgsImV4cCI6MTY5Njk0NzY5OH0.lMKKZWsFjByxSZEaKpmxkwTkMaaXJLoKqywrukD1aH0',
        },
      });

      const data = await response.json();

      setComments(data);
    } catch (e) {
      setError(e);
      console.log('Errore nel caricamento', error);
    }
  };

  const postComments = async e => {
    e.preventDefault();
    try {
      const response = await fetch(Url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEyZThmMTBjNThjZTAwMTRlNmFjOTYiLCJpYXQiOjE2OTU3MzgwOTgsImV4cCI6MTY5Njk0NzY5OH0.lMKKZWsFjByxSZEaKpmxkwTkMaaXJLoKqywrukD1aH0',
        },
        body: JSON.stringify({
          author: username,
          comment: recensione,
          rate: rate,
          elementId: bookId,
        }),
      });
      setRefresh(!refresh);
      empty();
    } catch (e) {
      setError(e);
      console.log('Errore nel salvataggio dei commenti', e);
    }
  };

  const deleteComments = async commentId => {
    const confirmation = window.confirm(
      'Sei sicuro di voler eliminare questo commento?'
    );
    if (confirmation) {
      try {
        const response = await fetch(Url + commentId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEyZThmMTBjNThjZTAwMTRlNmFjOTYiLCJpYXQiOjE2OTU3MzgwOTgsImV4cCI6MTY5Njk0NzY5OH0.lMKKZWsFjByxSZEaKpmxkwTkMaaXJLoKqywrukD1aH0',
          },
        });

        if (response.ok) {
          setRefresh(!refresh);
        } else {
          console.error("Errore nell'eliminazione del commento");
        }
      } catch (error) {
        console.error('Errore nella cancellazione dei commenti', error);
      }
    }
  };

  const putComments = async (commentId, updatedComment) => {
    try {
      const response = await fetch(`${Url}${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTEyZThmMTBjNThjZTAwMTRlNmFjOTYiLCJpYXQiOjE2OTU3MzgwOTgsImV4cCI6MTY5Njk0NzY5OH0.lMKKZWsFjByxSZEaKpmxkwTkMaaXJLoKqywrukD1aH0',
        },
        body: JSON.stringify(updatedComment),
      });

      if (response.ok) {
        const updatedComments = comments.map(comment =>
          comment._id === commentId
            ? {
                ...comment,
                comment: updatedComment.comment,
                rate: updatedComment.rate,
              }
            : comment
        );
        setComments(updatedComments);
        setEditingCommentId(null);
      } else {
        console.error('Errore, non riesco ad modificare il commento');
      }
    } catch (error) {
      console.error('Impossibile modificare i commenti', error);
    }
  };
  const saveEditedComment = async commentId => {
    if (isEditing) {
      const updatedComment = {
        comment: editedCommentText,
        rate: editedRate,
      };
      await putComments(commentId, updatedComment);
    } else {
      cancelEditingComment();
    }
  };
  const startEditingComment = (commentId, commentText) => {
    setEditingCommentId(commentId);
    setEditedCommentText(commentText);

    setIsEditing(true);
  };

  const cancelEditingComment = () => {
    setIsEditing(false);
    setEditingCommentId(null);
    setEditedCommentText('');
  };
  useEffect(() => {
    getResponse();
  }, [refresh]);

  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}>
        Mostra commenti
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className='mr-0'>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body className='corpo'>
          <ul>
            {comments.map(comment => (
              <li key={comment._id}>
                <p>{comment.author}</p>
                {editingCommentId === comment._id ? (
                  <>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      value={editedCommentText}
                      onChange={e => setEditedCommentText(e.target.value)}
                    />
                    <Form.Group className='mb-3'>
                      <Form.Label>Nuovo voto</Form.Label>
                      <Form.Control
                        min={1}
                        max={5}
                        value={editedRate}
                        onChange={e => setEditedRate(e.target.value)}
                        name='editedRate'
                        type='number'
                      />
                    </Form.Group>
                    <Button
                      variant='primary'
                      onClick={() => saveEditedComment(comment._id)}>
                      Salva
                    </Button>
                    <Button
                      variant='secondary'
                      onClick={() => cancelEditingComment()}>
                      Annulla
                    </Button>
                  </>
                ) : (
                  <>
                    <p>{comment.comment}</p>
                    <p>Voto: {comment.rate}/5</p>{' '}
                    <Button
                      className='mb-4'
                      variant='primary'
                      onClick={() =>
                        startEditingComment(comment._id, comment.comment)
                      }>
                      MODIFICA
                      <Pencil
                        className='modified'
                        variant='light'
                      />
                    </Button>
                    <Button
                      className='mb-4'
                      variant='danger'
                      onClick={() => deleteComments(comment._id)}>
                      ELIMINA
                      <Trash
                        className='cestino'
                        color='black'
                        style={{ cursor: 'pointer' }}
                      />
                    </Button>
                  </>
                )}
              </li>
            ))}
          </ul>
          <Form>
            <h1>Facci sapere cosa ne pensi!</h1>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlInput1'>
              <Form.Label>Username/email</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                autoFocus
                name='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Commento</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='recensione'
                value={recensione}
                onChange={e => setRecensione(e.target.value)}
                type='text'
              />
            </Form.Group>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              min={1}
              max={5}
              value={rate}
              onChange={e => setRate(e.target.value)}
              name='rate'
              type='number'
            />
          </Form>
          <Button
            className='mt-3'
            variant='primary'
            onClick={e => postComments(e)}>
            Aggiungi
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleClose}>
            Chiudi
          </Button>
          <Button
            variant='primary'
            onClick={handleClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentArea;
