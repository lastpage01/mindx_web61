import http from "../http-common";
import axios from "axios";

class AuthService {
  login(User, Password) {
    return axios({
      method: "post",
      url: "http://localhost:3000/api/users/login",
      data: { User, Password },
    }).then((res) => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("username", User);
        axios({
          headers: {
            Authorization: `Bearer ${res.data.token}`,
          },
        });
      }
      return res.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("username");
  }

  findByUser = (user) => {
    return http.get(`users/findByUserName?User=${user}`);
  };
  getUser = (user) => {
    return http.get(`users/getUser?User=${user}`);
  };
  searchUser = (user) => {
    return http.get(`users/search?User=${user}`);
  };
  create = (data) => {
    return axios({
      method: "post",
      url: "http://localhost:3000/api/users/register",
      data: data,
    });
  };
  getAll = () => {
    return http.get(`/users`);
  };
  delete = (id) => {
    return http.delete(`/users/${id}`);
  };
  update = (id,data) =>{
    return axios({
      method:"put",
      url:`http://localhost:3000/api/users/${id}`,
      data: data,
    })
  }
}

export default new AuthService();
