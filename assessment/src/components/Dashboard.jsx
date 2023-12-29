// Dashboard Component (dashboard.jsx)
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails, addItem, removeItem } from './redux/dashboardSlice'; // DashboardSlice actions

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const details = useSelector((state) => state.dashboard.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails()); // Fetch initial details
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search logic and dispatch an action
  };

  const handleAddItem = () => {
    const newItem = {/* Details of the new item */};
    dispatch(addItem(newItem)); // Dispatch add item action
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId)); // Dispatch remove item action
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {/* Render details and handle adding/removing items */}
      </div>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default Dashboard;
