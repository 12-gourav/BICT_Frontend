import axios from "axios";

export const createNews = async (title, dis) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/create/news", {
      title,
      dis,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getNews = async (page) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/get/news", {
      params: {
        page: page,
        limit: 10,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateNews = async (id, title, dis) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/update/news", {
      id,
      title,
      dis,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNews = async (id) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/delete/news", {
      params: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchnews = async (page, query) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/search/news", {
      params: {
        page: page,
        limit: 10,
        query,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
