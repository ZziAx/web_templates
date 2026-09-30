import axios from "axios";



export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL, // <- put your base URL here
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
});



// --- Retry Logic Configuration ---
const RETRY_COUNT = 20; // Number of times to retry
const RETRY_DELAY = 5000; // Delay between retries in milliseconds (1 second)
localStorage
api.interceptors.request.use(
  (config) => {
    // Add any request configuration here (e.g., auth tokens)
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    // Handle request errors (e.g., network offline)
    return Promise.reject(error);
  },
);



api.interceptors.response.use(
  // Success handler: If the request was successful, just return the response
  (response) => response,

  // Error handler: This is where we implement retries
  async (error) => {
    const originalRequest = error.config;

    console.log("errorr ",error);

    // Check if the error is due to a network issue or a specific status code
    // and if we haven't exceeded the retry count
    // error.response && error.response.status >= 500 && 
    if (!originalRequest._retry) {
      // Mark this request as being retried to prevent infinite loops
      originalRequest._retry = true;

      // Implement retry delay
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));

      // Retry the request
      try {
        console.log(`Retrying request: ${originalRequest.url}`);
        originalRequest._retry = false;
        return api(originalRequest); // Make the request again
      } catch (retryError) {
        // If retry also fails, reject the promise
        originalRequest._retry = false;
        return Promise.reject(retryError);
      }
    }

    // If it's not a retryable error, or we've exceeded retries,
    // reject the promise with the original error
    return Promise.reject(error);
  }
);

export default api;
