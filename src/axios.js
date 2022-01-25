import axios from "axios";
axios.defaults.baseURL = "https://peculiar-store-api.herokuapp.com/api";
// axios.defaults.baseURL = "http://localhost:8080/api";
axios.interceptors.request.use(function (req) {
   const user = localStorage.getItem("user");

   if (user) {
      const { token } = JSON.parse(localStorage.getItem("user"));
      req.headers.authorization = `Bearer ${token}`;
      return req;
   }
   return req;
});
