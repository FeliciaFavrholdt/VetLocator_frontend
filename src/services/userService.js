import { fetchData } from "./apiService";

// Base URL for the JSON server
const BASE_URL = "http://localhost:3001/users";

export const userService = {
  getAllUsers(callback) {
    fetchData(BASE_URL, callback, "GET");
  },
  getUserById(userId, callback) {
    fetchData(`${BASE_URL}/${userId}`, callback, "GET");
  },
  createUser(newUser, callback) {
    fetchData(BASE_URL, callback, "POST", newUser);
  },
  updateUser(userId, updatedUser, callback) {
    fetchData(`${BASE_URL}/${userId}`, callback, "PUT", updatedUser);
  },
  deleteUser(userId, callback) {
    fetchData(`${BASE_URL}/${userId}`, callback, "DELETE");
  },
};
