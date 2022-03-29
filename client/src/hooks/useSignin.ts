import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const useSignin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = (email: string, password: string) => {
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
      }
    }).catch(err => {
      setError(err.message);
    });
  };

  return {
    error,
    handleSignin
  };
};