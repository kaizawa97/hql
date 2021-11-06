import { useState, useEffect } from 'react';
import instace from '../config/axios';

export const AuthSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const blanksetEmail = () => {
    setEmail(email);
  };

  const blanksetPassword = () => {
    setPassword(password);
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  useEffect(() => {
    instace.post('/auth/signin', {
      email,
      password
    }).then(res => {
      setUser(res.data.user);
    }).catch(error => {
      setErrorMessage(error);
    });
  });

  return {
    email,
    password,
    error,
    loading,
    user,
    blanksetEmail,
    blanksetPassword
  };
  
};
