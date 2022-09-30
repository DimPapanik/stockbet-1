import axios from "axios";
const baseUrl = "http://localhost:3001/api/tips"
const baseUrlUnsure = "http://localhost:3001/api/tips-unsure"
const baseUrlTomorrow = "http://localhost:3001/api/tips-tomorrow"

const getAll = () => axios.get(baseUrl)

const getAllUnsure = () => axios.get(baseUrlUnsure)

const getAllTomorrow = () => axios.get(baseUrlTomorrow)

const tipsService = { getAll, getAllUnsure, getAllTomorrow }

export default tipsService