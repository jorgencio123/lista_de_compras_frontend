import React from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({ items, deleteItem, startEditing, toggleItemPurchased }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <ShoppingItem
          key={index}
          index={index}
          item={item}
          deleteItem={deleteItem}
          startEditing={startEditing}
          toggleItemPurchased={toggleItemPurchased}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;
