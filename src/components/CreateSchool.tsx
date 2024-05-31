import React, { useState } from 'react';
import api from '../api';

const CreateSchool: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    address: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/schools', form);
      alert('School created successfully');
    } catch (error) {
      console.error('Error creating school:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <button type="submit">Create School</button>
    </form>
  );
};

export default CreateSchool;
