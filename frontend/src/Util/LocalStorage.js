export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId;
};

export const getId = () => {
  const id = localStorage.getItem("id");
  return id;
};

export const setUserId = (userId) => {
  localStorage.setItem("userId", userId);
};

export const setId = (id) => {
  localStorage.setItem("id", id);
};
