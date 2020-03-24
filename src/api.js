import axios from 'axios'

export default axios.create({
    // baseURL: `http://localhost:5000`
    baseURL: 'https://guarded-caverns-42971.herokuapp.com/'
  });