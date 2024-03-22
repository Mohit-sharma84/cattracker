import React, { useState } from 'react';

function CatList({ catList, removeCat, editCat }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedCat, setUpdatedCat] = useState({});

  const handleEditCat = (index, cat) => {
    setEditingIndex(index);
    setUpdatedCat({ ...cat });
  };

  const handleSaveCat = (index) => {
    editCat(index, updatedCat);
    setEditingIndex(null);
    setUpdatedCat({});
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setUpdatedCat({});
  };

  const handleInputChange = (e, field) => {
    setUpdatedCat({
      ...updatedCat,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Cat List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {catList.map((cat, index) => (
            <tr key={index}>
              <td>{editingIndex === index ? <input type="text" value={updatedCat.name || ''} onChange={(e) => handleInputChange(e, 'name')} /> : cat.name}</td>
              <td>{editingIndex === index ? <input type="text" value={updatedCat.breed || ''} onChange={(e) => handleInputChange(e, 'breed')} /> : cat.breed}</td>
              <td>{editingIndex === index ? <input type="text" value={updatedCat.description || ''} onChange={(e) => handleInputChange(e, 'description')} /> : cat.description}</td>
              <td>
                {editingIndex === index ? (
                  <>
                    <button onClick={() => handleSaveCat(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditCat(index, cat)}>Edit</button>
                )}
                <button onClick={() => removeCat(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CatList;
