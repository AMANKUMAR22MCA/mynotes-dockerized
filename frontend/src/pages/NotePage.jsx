import React, { useState, useEffect } from 'react';
import ArrowLeft from '../components/ArrowLeft';
import { useParams, useNavigate } from 'react-router-dom';

const NotePage = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [note, setNote] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

  useEffect(() => {
    if (id === 'new') return;
    const getNote = async () => {
      setLoading(true);
      try {
        let response = await fetch(`${API_URL}/notes/${id}/`);
        if (!response.ok) throw new Error(`Failed to fetch note with id ${id}`);
        let data = await response.json();
        setNote({ ...data, initialBody: data.body });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getNote();
  }, [id]);

  const createNote = async () => {
    await fetch(`${API_URL}/notes/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
  };

  const updateNote = async () => {
    await fetch(`${API_URL}/notes/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    await fetch(`${API_URL}/notes/${id}/`, { method: 'DELETE' });
    navigate('/');
  };

  const handleSubmit = async () => {
    if (id !== 'new' && !note?.body?.trim()) {
      await deleteNote();
    } else if (id !== 'new' && note?.body?.trim() === note?.initialBody?.trim()) {
      navigate('/');
      return;
    } else if (id !== 'new') {
      await updateNote();
    } else if (id === 'new' && note?.body?.trim()) {
      await createNote();
    }

    navigate('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {id !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => setNote({ ...note, body: e.target.value })}
        value={note?.body || ''}
      />
    </div>
  );
};

export default NotePage;
