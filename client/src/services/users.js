import axios from 'axios'
const baseUrl = '/api/users/'

export const registerUser = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data
}

export const getAllUsers = async () => {
  const res = await axios.get(baseUrl);
  return res.data
}


export const getAUser = async (id) => {
  console.log ('유저확인', id)
  try {
    const res = await axios.get(baseUrl + id );
    return res.data
  } catch (error) {
    console.log(error);
    throw error; // re-throw the error to the caller
  }
}

export const getUserPosts = async (userId) => {
  try {
    const res = await axios.get(postBaseUrl + userId + '/posts');
    return res.data;
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error to the caller
  }
};


export const editUser = async (id, data) => {
  const res = await axios.put(baseUrl + id, data);
  return res.data
}