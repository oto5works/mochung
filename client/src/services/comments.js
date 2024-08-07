import axios from 'axios'
const baseUrl = '/api/comments/'



export const createComment = async (post) => {
  console.log ('정보버거잇', post)
  try {
  const res = await axios.post(baseUrl, post)
  return res.data
} catch (error) {
  console.log(error);
  throw error; // re-throw the error to the caller
}
}

export const getComment = async (id) => {
  console.log ('유저확인', id)
  try {
    const res = await axios.get(baseUrl + id );
    return res.data
  } catch (error) {
    console.log(error);
    throw error; // re-throw the error to the caller
  }
}

export const deleteComment = async (id, data) => {
  try {
    const res = await axios.delete(baseUrl + id, {
      data: data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};




