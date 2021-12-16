import axios from 'axios';

const DEFAULT_API_CONFIG = {
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 5000,
  mode: 'cors',
  credentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
};

export default instance = axios.create(DEFAULT_API_CONFIG);