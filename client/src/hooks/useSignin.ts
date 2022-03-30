import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = (email: string, password: string) => {
    setLoading(true);
    axios.post('http://localhost:5000/api/v1/login',
      {
        email: email,
        password: password
      },
      {
        withCredentials: true,
      }
    ).then(res => {
      if (res.status === 200) {
        navigate('/home');
      }
      else {
        setError(res.data.message);
        setLoading(false);
      }
    }).catch(err => {
      if (err.response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('Please contact the administrator');
      }
      setLoading(false);
    });
  };

  return {
    loading,
    error,
    handleSignin
  };
};