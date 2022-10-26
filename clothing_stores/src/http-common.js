import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api",
  // origin: true,
  // withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",

  },
});
