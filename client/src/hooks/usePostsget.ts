import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export type User = {
  Name: string | null;
  Email: string | null;
}

export type Post = {
  user: User,
  id: number,
  body: string,
  createdAt: Date
}

export const usePostsGetData = () => {
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const serverDataGet = () => {
    setLoading(true);
    axios.get('http://localhost:5000/api/v1/posts', {
      withCredentials: true,
    }).then(res => {
      if (res.status === 200) {
        setPosts(res.data);
        setLoading(false);
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