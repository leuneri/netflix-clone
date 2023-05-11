import axios from 'axios'

// Has base of website url as object
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;