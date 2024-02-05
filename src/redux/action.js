import axios from "axios";

export const CreateStudent = (
  firstName,
  lastName,
  dob,
  gender,
  father,
  mother,
  email,
  phone,
  homePhone,
  address,
  tenPercent,
  tenBoard,
  tenYear,
  enterPercent,
  enterBoard,
  enterYear,
  course,
  duration
) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/create/student", {
      firstName,
      lastName,
      dob,
      gender,
      father,
      mother,
      email,
      phone,
      homePhone,
      address,
      tenPercent,
      tenBoard,
      tenYear,
      enterPercent,
      enterBoard,
      enterYear,
      course,
      duration,
    });
  } catch (error) {
    console.log(error);
  }
};

export const FetchStudents = async (currentPage) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/get/student", {
      params: {
        page: currentPage,
        limit: 10,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateStudent = (
  id,
  firstName,
  lastName,
  dob,
  gender,
  father,
  mother,
  email,
  phone,
  homePhone,
  address,
  tenPercent,
  tenBoard,
  tenYear,
  enterPercent,
  enterBoard,
  enterYear,
  course,
  duration
) => {
  try {
    return axios.post(import.meta.env.VITE_APP_BASE_URL + "/update/student", {
      id,
      firstName,
      lastName,
      dob,
      gender,
      father,
      mother,
      email,
      phone,
      homePhone,
      address,
      tenPercent,
      tenBoard,
      tenYear,
      enterPercent,
      enterBoard,
      enterYear,
      course,
      duration,
    });
  } catch (error) {
    console.log(error);
  }
};

export const DeleteStudent = async (id) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/delete/student", {
      params: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchQuery = async (query) => {
  try {
    return axios.get(import.meta.env.VITE_APP_BASE_URL + "/search/student", {
      params: {
        query: query,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
