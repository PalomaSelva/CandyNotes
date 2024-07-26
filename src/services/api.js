import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://candynotes-api-1.onrender.com/',
})
