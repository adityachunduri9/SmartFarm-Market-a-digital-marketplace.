import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000' });

export async function fetchProducts(q=''){
  const resp = await API.get('/api/products?q=' + encodeURIComponent(q));
  return resp.data;
}
export default API;

