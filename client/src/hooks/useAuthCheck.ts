import React, { useState } from 'react';
import axios from 'axios';

export const useAuthCheck = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  const handleAuthCheck = () => {
    axios.get('http://localhost:5000/api/v1/isLogined',
      {
        withCredentials: true,
      }
    ).then(res => {
      if (res.status === 200) {
        setAuthenticated(true);
      }
      else {
        setAuthError(res.data.message);
      }
    }).catch(err => {
      if (err.response.status === 401) {
        setAuthError('Not Signed');
      } else {
        setAuthError('Please contact the administrator');
      }
    });
  };

  return {
    authenticated,
    authError,
    handleAuthCheck
  };
};