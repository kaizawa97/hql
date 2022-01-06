import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

export const postlists = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState("");
  const [movies, setMovies] = useState("");
  const [comments, setComments] = useState("");
  const [likes, setLikes] = useState("");

  const [inputtextarea, setInputtextarea] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getposts();
  },[]);

  const getposts = () => {
    axios.get('http://localhost:5000/api/v1/posts', { withCredentials: true })
      .then(res => {
        setPosts(res.data);
        console.log("posts", res.data);
      }).catch(err => {
        console.log("err", err);
      })
  }
}