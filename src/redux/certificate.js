import axios from "axios";

export const createCertificates = async (myform) => {
  try {
    return axios.post(
      import.meta.env.VITE_APP_BASE_URL + "/create/certificate",
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

export const getCertificates = async (current) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/get/certificate", {
      params: {
        limit: 10,
        page: current,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCertificates = async (myform) => {
  try {
    return axios.post(
      import.meta.env.VITE_APP_BASE_URL + "/update/certificate",
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

export const deleteertificates = async (id) => {
  try {
    return axios.get(
      import.meta.env.VITE_APP_BASE_URL + "/delete/certificate",
      {
        params: {
          id,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const searchCertificates = async (current, query) => {
  try {
    return axios.get(
      import.meta.env.VITE_APP_BASE_URL + "/search/certificates",
      {
        params: {
          limit: 10,
          page: current,
          query,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const searchSingleCertificates = async (query) => {
  try {
    return axios.get(
      import.meta.env.VITE_APP_BASE_URL + "/search/single/certificates",
      {
        params: {
          query,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
