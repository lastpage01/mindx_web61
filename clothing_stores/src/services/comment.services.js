import http from "../http-common";
import axios from "axios";

class CommentDataService {
  getAll() {
    return http.get("/comments");
  }
  create(data) {
    // return http.post("/comments", data);
    return axios({
      method: "post",
      url: "http://localhost:3000/api/comments",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    });
  }
}
export default new CommentDataService();
