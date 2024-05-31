import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SchoolList from './components/SchoolList';
import CreateSchool from './components/CreateSchool';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/schools" element={<SchoolList />} />
      <Route path="/schools/create" element={<CreateSchool />} />
    </Routes>
  </Router>
);

export default AppRoutes;
