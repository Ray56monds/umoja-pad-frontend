import React, { useEffect, useState } from 'react';
import api from '../api'; // Ensure correct import path

const InventoryItemList: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get('/inventory-item');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching inventory items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryItemList;
