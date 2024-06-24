import axios from "axios";

export const createExam = async (title, dis,link) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/create/exam", {
      title,
      dis,
      link
    });
  } catch (error) {
    console.log(error);
  }
};

export const getExam = async (page) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/get/exam", {
      params: {
        page: page,
        limit: 10,
      },
    });
  } catch (error) {
    console.log(error);
  }
};


export const updateExam = async (id, title, dis,link) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/update/exam", {
      id,
      title,
      dis,
      link
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExam = async (id) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/delete/exam", {
      params: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchExam = async (page, query) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/search/exam", {
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
