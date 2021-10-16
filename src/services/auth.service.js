import axios from "axios";

const API_URL = "http://137.184.62.240:5000";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "/user/auth/login", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, email, password) {
    return axios.post(API_URL + "/user/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });
  }
}

export default new AuthService();