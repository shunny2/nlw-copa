import axios from 'axios'

export const api = axios.create({
    baseURL: `${process.env.HOST}:${process.env.PORT}`,
    timeout: 1000
})