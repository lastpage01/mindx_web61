import http from "../http-common";
import axios from "axios";

class BillDetailsDataService {
  getAll() {
    return http.get("/billDetails");
  }
  create(data) {
    return axios({
      method: "post",
      url: "http://localhost:3000/api/billDetails",
      headers: {
        "Content-Type": "application/json",
      },
      data:data,
    });
  }
}

export default new BillDetailsDataService();
