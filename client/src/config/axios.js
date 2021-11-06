import axios from 'axios';

const DEFAULT_API_CONFIG = {
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 5000,
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  }
};

export default instace = axios.create(DEFAULT_API_CONFIG);