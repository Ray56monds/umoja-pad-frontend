import React, { useEffect, useState } from 'react';
import api from '../api';

const SchoolList: React.FC = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await api.get('/schools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div>
      <h1>Schools</h1>
      <ul>
        {schools.map((school: any) => (
          <li key={school.id}>{school.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
