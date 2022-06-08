import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_GITLAB_API_PATH,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_GITLAB_API_TOKEN}`,
  },
});

export default api;
