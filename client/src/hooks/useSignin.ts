import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const [signinError, setSigninError] = useState('');
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
        setSigninError(res.data.message);
        setLoading(false);
      }
    }).catch(err => {
      if (err.response.status === 401) {
        setSigninError('Invalid email or password');
      } else {
        setSigninError('Please contact the administrator');
      }
      setLoading(false);
    });
  };

  return {
    loading,
    signinError,
    handleSignin
  };
};