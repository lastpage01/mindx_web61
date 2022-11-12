import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
var token = "";
if (user && user.token) {
  token = user.token;
}
export default axios.create({
  baseURL: "http://localhost:3000/api",
  // origin: true,
  // withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
    // Accept: "application/json",
  },
});
