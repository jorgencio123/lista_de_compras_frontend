import React from 'react';

const ShoppingItem = ({ item, index, deleteItem, startEditing, toggleItemPurchased }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${item.purchased ? 'list-group-item-success' : ''}`}>
      <div>
        {item.name} - {item.quantity} - {item.category} - ${item.price} - {item.purchaseDate} - {item.urgent ? 'Urgente' : 'No Urgente'}
      </div>
      <div>
        <button onClick={() => toggleItemPurchased(index)} className="btn btn-sm btn-outline-primary mr-2">
          {item.purchased ? 'No Comprado' : 'Comprado'}
        </button>
        <button onClick={() => startEditing(index)} className="btn btn-sm btn-outline-secondary mr-2">
          Editar
        </button>
        <button onClick={() => deleteItem(index)} className="btn btn-sm btn-outline-danger">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default ShoppingItem;
