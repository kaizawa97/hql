import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export const usePostsGetData = () => {
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState('');
  const [posts, setPosts] = useState([]);

  const serverDataGet = () => {
    setLoading(true);
    axios.get('http://localhost:5000/api/v1/posts', {
      withCredentials: true,
    }).then(res => {
      if (res.status === 200) {
        console.log(res);
        setPosts(res.data);
        setLoading(false);
        console.log(posts);
      }
      else {
        setLoadingError(res.data.message);
        setLoading(false);
      }
    }).catch(err => {
      setLoadingError('Please contact the administrator');
      setLoading(false);
    });
  }
  return {
    loading,
    loadingError,
    posts,
    serverDataGet
  };
}