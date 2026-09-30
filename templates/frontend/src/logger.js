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



const sendLog = async (message)=>{
  
    await api.post('logs/send',{
        message:message
    })

}

export default sendLog;