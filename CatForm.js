
import React, { useState } from 'react';

function CatForm({ addCat }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCat({ name, breed, description });
    setName('');
    setBreed('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Cats</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default CatForm;