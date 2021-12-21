import axios from "axios";

// ANCHOR this function apply delay between axios request
const DELAY_BETWEEN = Number(process.env.NEXT_PUBLIC_DELAY_BETWEEN_REQUEST);
let time_delay = 0;
function handleDelayBetweenRequests(config) {
  time_delay += DELAY_BETWEEN;
  return new Promise((resolve) => {
    setTimeout(() => {
      time_delay -= DELAY_BETWEEN;
      resolve(config);
    }, time_delay);
  });
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-rapidapi-host": process.env.NEXT_PUBLIC_API_HEADERS_HOST,
    "x-rapidapi-key": process.env.NEXT_PUBLIC_API_HEADERS_KEY,
  },
});

instance.interceptors.request.use(
  async function (config) {
    return handleDelayBetweenRequests(config);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
