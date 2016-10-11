import axios from 'axios';

const api = axios.create({
  baseURL: location.href.indexOf('localhost') > 0 ? 'http://laredux.dev/api/v1' : '/api/v1'
});

export default api;