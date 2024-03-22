import React, { useState } from 'react';
import './App.css';
import CatList from './CatList';
import CatForm from './CatForm';

function App() {
  const [catList, setCatList] = useState([]);

  const addCat = (cat) => {
    setCatList([...catList, cat]);
  };

  const removeCat = (index) => {
    const updatedList = [...catList];
    updatedList.splice(index, 1);
    setCatList(updatedList);
  };

  const editCat = (index, updatedCat) => {
    const updatedList = [...catList];
    updatedList[index] = updatedCat;
    setCatList(updatedList);
  };

  return (
    <div className="App">
      <h1>Ash Cat Tracker</h1>
      <CatForm addCat={addCat} />
      <CatList
        catList={catList}
        removeCat={removeCat}
        editCat={editCat}
      />
    </div>
  );
}

export default App;
