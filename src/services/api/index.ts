import axios from 'axios'
import { env } from '@/enviroment/env.mjs'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

export default api
