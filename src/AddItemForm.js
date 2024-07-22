import React, { useState, useEffect } from 'react';

const AddItemForm = ({ addItem, updateItem, editingItem, isEditing }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [purchased, setPurchased] = useState(false);
  const [purchaseDate, setPurchaseDate] = useState('');
  const [urgent, setUrgent] = useState(false);

  useEffect(() => {
    if (isEditing && editingItem) {
      setName(editingItem.name);
      setQuantity(editingItem.quantity);
      setCategory(editingItem.category);
      setPrice(editingItem.price);
      setPurchased(editingItem.purchased);
      setPurchaseDate(editingItem.purchaseDate);
      setUrgent(editingItem.urgent);
    }
  }, [isEditing, editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category, price, purchased, purchaseDate, urgent };
    if (isEditing) {
      updateItem(item);
    } else {
      addItem(item);
    }
    setName('');
    setQuantity('');
    setCategory('');
    setPrice('');
    setPurchased(false);
    setPurchaseDate('');
    setUrgent(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del artículo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Categoría:</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="categoryRopa"
            name="category"
            value="Ropa"
            checked={category === 'Ropa'}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <label className="form-check-label" htmlFor="categoryRopa">Ropa</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="categoryComputacion"
            name="category"
            value="Computación"
            checked={category === 'Computación'}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <label className="form-check-label" htmlFor="categoryComputacion">Computación</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="categoryMusica"
            name="category"
            value="Música"
            checked={category === 'Música'}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <label className="form-check-label" htmlFor="categoryMusica">Música</label>
        </div>
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          className="form-control"
          placeholder="Fecha de compra"
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={urgent}
          onChange={(e) => setUrgent(e.target.checked)}
        />
        <label className="form-check-label">Urgente</label>
      </div>
      <button type="submit" className="btn btn-primary">
        {isEditing ? 'Actualizar Artículo' : 'Agregar Artículo'}
      </button>
    </form>
  );
};

export default AddItemForm;
