import axios from "axios";

export const createGallery = async (myform) => {
  try {
    return axios.post(
      import.meta.env.VITE_APP_BASE_URL + "/create/gallery",
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

export const getGallery = async (current) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/get/gallery", {
      params: {
        limit: 10,
        page: current,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateGallery = async (myform) => {
  try {
    return axios.post(
      import.meta.env.VITE_APP_BASE_URL + "/update/gallery",
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

export const deletegallery = async (id) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/delete/gallery", {
      params: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchGallery = async (current, query) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/search/gallery", {
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
