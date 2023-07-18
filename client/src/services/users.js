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


export const getAUser = async () => {
  try {
    const res = await axios.get(baseUrl + 'me');
    console.log ('확인', res.data)

    return res.data
  } catch (error) {
    console.log(error);
    throw error; // re-throw the error to the caller
  }
}




export const editUser = async (id, data) => {
  const res = await axios.put(baseUrl + id, data);
  return res.data
}