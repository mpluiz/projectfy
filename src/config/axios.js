import axios from 'axios';

const api = axios.create({
  baseURL: process.env.GITLAB_API_TOKEN,
  headers: {
    Authorization: `Bearer ${process.env.GITLAB_API_TOKEN}`,
  },
});

export default api;
