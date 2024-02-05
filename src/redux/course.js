import axios from "axios";

export const createCourse = async (myform) => {
  try {
    return axios.post(
      import.meta.env.VITE_APP_BASE_URL + "/create/course",
      myform,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getCourse = async (current) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/get/course", {
      params: {
        limit: 10,
        page: current,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = async (myform) => {
  try {
    return axios.post(
      import.meta.env.VITE_APP_BASE_URL + "/update/course",
      myform,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = async (id) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/delete/course", {
      params: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchCourse = async (current, query) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/search/course", {
      params: {
        limit: 10,
        page: current,
        query,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getHomeCourse = async () => {
  try {
    return axios.get(
      import.meta.env.VITE_APP_BASE_URL + "/get/home/course",
      {}
    );
  } catch (error) {
    console.log(error);
  }
};
