import axios from "axios";

const BASE_URL = "https://take-home-exercise-api.herokuapp.com";

const getInstance = (extraOptions = {}) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: { 'API-KEY': process.env.NEXT_PUBLIC_API_KEY },
    ...extraOptions,
  });
};

export default getInstance;
