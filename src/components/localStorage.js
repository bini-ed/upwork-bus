import LocalStorage from "@react-native-async-storage/async-storage";
// import jwtDecode from 'jwt-decode';

const getItem = async (name) => {
  try {
    return await LocalStorage.getItem(name);
  } catch (error) {
    return error;
  }
};
const setItem = async (name, token) => {
  try {
    return await LocalStorage.setItem(name, token);
  } catch (error) {
    return error;
  }
};
const removeItem = async (name) => {
  try {
    return await LocalStorage.removeItem(name);
  } catch (error) {
    return error;
  }
};
const getUser = async (name) => {
  try {
    const token = await getItem(name);
    if (token) return await jwtDecode(token);
  } catch (error) {
    return error;
  }
};

export { setItem, getItem, getUser, removeItem };
