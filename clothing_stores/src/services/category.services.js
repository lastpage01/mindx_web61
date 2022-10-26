import http from "../http-common";

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
}
export default new CategoryDataService();