import './App.css';
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const handleAddItem = (item) => {
    const index = list.findIndex(listItem => listItem.date === item.date);
    if (index !== -1) {
      const updatedList = list.map((listItem, i) => {
        if (i !== index) {
          return listItem;
        }
        return {
          ...listItem,
          distance: listItem.distance + item.distance,
        };
      });

      setList(updatedList);
      return;
    }

    setList([...list, item].sort((a, b) => {
      const datePartsA = a.date.split('.');
      const datePartsB = b.date.split('.');
      return new Date(datePartsB[2], datePartsB[1] - 1, datePartsB[0]) - new Date(datePartsA[2], datePartsA[1] - 1, datePartsA[0]);
    }));
  };

  const handleDeleteItem = (item) => {
    const index = list.indexOf(item);
    if (index === -1) {
      return;
    }

    const listCopy = [...list];
    listCopy.splice(index, 1);
    setList(listCopy);
  };

  return (
    <div className="app">
      <FormComponent onAddItem={handleAddItem}/>
      <TableComponent list={list} onDelete={handleDeleteItem}/>
    </div>
  );
}

export default App;
