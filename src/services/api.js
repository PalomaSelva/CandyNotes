import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://candynotes-api.onrender.com',
})
