import axios from "axios";

const API_URL = "https://en.wikipedia.org/w/api.php";
    // ?action=opensearch&format=json&search=google

const $api = axios.create({
    baseURL: API_URL
})

export default $api;