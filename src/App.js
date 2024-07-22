import React, { useState, useEffect } from 'react';
import ShoppingList from './ShoppingList';
import AddItemForm from './AddItemForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [editingItemIndex, setEditingItemIndex] = useState(null);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const startEditing = (index) => {
    setEditingItemIndex(index);
  };

  const updateItem = (item) => {
    const newItems = [...items];
    newItems[editingItemIndex] = item;
    setItems(newItems);
    setEditingItemIndex(null);
  };

  const toggleItemPurchased = (index) => {
    const newItems = [...items];
    newItems[index].purchased = !newItems[index].purchased;
    setItems(newItems);
  };

  return (
    <div className="container">
      <h1 className="my-4">Lista de Compras</h1>
      <AddItemForm
        addItem={addItem}
        updateItem={updateItem}
        editingItem={items[editingItemIndex]}
        isEditing={editingItemIndex !== null}
      />
      <ShoppingList
        items={items}
        deleteItem={deleteItem}
        startEditing={startEditing}
        toggleItemPurchased={toggleItemPurchased}
      />
    </div>
  );
};

export default App;
