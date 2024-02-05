import axios from "axios";

export const isLogin = async (email, password) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/login", {
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
};

export const load = async (token) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/load", {
      headers: {
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
