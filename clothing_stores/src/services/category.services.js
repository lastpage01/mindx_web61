import http from "../http-common";
import axios from "axios";

class CategoryDataService {
  getAll() {
    return http.get("/categories");
  }
  findByType(type) {
    return http.get(`/categories/findByType?type=${type}`);
  }
  get(id) {
    return http.get(`/categories/findById/${id}`);
  }
  findById(id) {
    return http.get(`/categories/findById?id=${id}`);
  }
  create(data) {
    return axios({
      method: "post",
      url: "http://localhost:3000/api/categories",
      data: data,
    });
  }
  update(id, data) {
    return axios({
      method: "put",
      url: `http://localhost:3000/api/categories/${id}`,
      data: data,
    });
  }
  delete(id) {
    return http.delete(`/categories/${id}`);
  }
}
export default new CategoryDataService();
