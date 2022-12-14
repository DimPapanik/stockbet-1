import axios from 'axios'
const baseUrl = "http://localhost:3001/api/users"

const getAll = () => axios.get(baseUrl)

const newUser = (user) => axios.post(baseUrl, user)

const userService = { getAll, newUser }

export default userService