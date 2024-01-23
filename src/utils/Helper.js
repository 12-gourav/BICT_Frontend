export const checkEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

export const checkPhone = (phone) => {
  const pattern = /^\d{10}$/;
  return pattern.test(phone);
};
