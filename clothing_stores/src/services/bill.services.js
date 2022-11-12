import http from "../http-common";
import axios from "axios";

class BillDataService {
  getAll() {
    return http.get("/bills");
  }
  findById(id) {
    return http.get(`/bills/findById?Id=${id}`);
  }
  create(data) {
    return axios({
      method: "post",
      url: "http://localhost:3000/api/bills",
      headers: {
        "Content-Type": "application/json",
      },
      data:data,
    });
  }
}

export default new BillDataService();
