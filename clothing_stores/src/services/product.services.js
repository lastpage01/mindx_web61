import http from "../http-common";
import axios from "axios";
class ProductDataService {
  getAll() {
    return http.get("/products");
  }
  findByName(name) {
    return http.get(`/products/findByName?name=${name}`);
  }
  findByIdCategory(Id_Category) {
    return http.get(`/products/findByIdCategory?Id_Category=${Id_Category}`);
  }
  get(id) {
    console.log(id);
    return http.get(`/products/findById/${id}`);
  }
  create(data) {
    return axios({
      method: "post",
      url: `http://localhost:3000/api/products`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  }
  update(id, data) {
    return axios({
      method: "put",
      url: `http://localhost:3000/api/products/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  }
  delete(id) {
    return http.delete(`/products/${id}`);
  }
  deleteAll() {
    return http.delete(`/deleteAll`);
  }
}
export default new ProductDataService();
