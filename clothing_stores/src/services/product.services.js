import http from "../http-common";

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
    return http.get(`/products/findById/${id}`);
  }
  create(data) {
    return http.post("/products", data);
  }
  update(id, data) {
    console.log("http::", http, id, data);
    return http({method: 'put',
    url: 'http://localhost:3000/api/products/6353d85945703c5f2a780cbc',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)});
  }
  delete(id) {
    return http.delete(`/products/${id}`);
  }
  deleteAll() {
    return http.delete(`/deleteAll`);
  }
}
export default new ProductDataService();
