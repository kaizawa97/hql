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

export const usePostsData = () => {
  const [loadingGet, setLoadingGet] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingError, setLoadingError] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [text, setTexts] = useState('');

  const serverDataGet = () => {
    setLoadingGet(true);
    axios.get('http://localhost:5000/api/v1/posts', {
      withCredentials: true,
    }).then(res => {
      if (res.status === 200) {
        setPosts(res.data);
        setLoadingGet(false);
      }
      else {
        setLoadingError(res.data.message);
        setLoadingGet(false);
      }
    }).catch(err => {
      setLoadingError('Please contact the administrator');
      setLoadingGet(false);
    });
  }

  const serverDataPost = (Text:string) => {
    setLoadingPost(true);
    axios.post('http://localhost:5000/api/v1/posts', 
    {
      user_id: "1",
      title: "This is test",
      text: Text,
      image: "https://localhost:5000/public/test.jpg",
      movie: "https://localhost:5000/public/abc.mp4"
    },
    {
      withCredentials: true,
    }).then(res => {
      if (res.status === 200) {
        setTexts(res.data);
        setLoadingPost(false);
      }
      else {
        setLoadingError(res.data.message);
        setLoadingPost(false);
      }
    }).catch(err => {
      setLoadingError('Please contact the administrator');
      setLoadingPost(false);
    });
  }

  return {
    loadingGet,
    loadingPost,
    loadingError,
    posts,
    serverDataGet,
    serverDataPost
  };
}