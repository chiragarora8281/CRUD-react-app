import axios from "axios";

let BASE_URL = "https://api.escuelajs.co/api/v1";
 const USER_API_INSTANCE = axios.create({
    baseURL:BASE_URL
});

export default USER_API_INSTANCE;