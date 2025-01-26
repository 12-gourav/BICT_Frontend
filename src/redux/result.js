import axios from "axios";

export const createResult = async (roll, name, father, course, status) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/create/result", {
      roll,
      name,
      father,
      course,
      status,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getResults = async (current,query) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/get/results", {
      params: {
        limit: 10,
        page: current,
        query
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = async (id,roll, name, father, course, status) => {
  try {
    return axios.post(
      import.meta.env.VITE_APP_BASE_URL + "/update/result",
   {id,roll, name, father, course, status},
      
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteResult = async (id) => {
  try {
    return axios.get(
      import.meta.env.VITE_APP_BASE_URL + "/delete/result",
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

export const searchResult = async (roll) => {
  try {
    return axios.get(
      import.meta.env.VITE_APP_BASE_URL + "/get/result/by/id",
      {
        params: {
        roll
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

