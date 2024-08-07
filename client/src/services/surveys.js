import axios from 'axios'
const baseUrl = '/api/surveys/'



export const createSurvey = async (post) => {
  console.log ('쎼베이', post)
  try {
  const res = await axios.post(baseUrl, post)
  return res.data
} catch (error) {
  console.log(error);
  throw error; // re-throw the error to the caller
}
}

export const getSurvey = async (id) => {
  console.log ('유저확인', id)
  try {
    const res = await axios.get(baseUrl + id );
    return res.data
  } catch (error) {
    console.log(error);
    throw error; // re-throw the error to the caller
  }
}

export const deleteSurvey = async (id, data) => {
  console.log ('삭제', id)
  console.log ('post_id삭제', data)

  try {
    const res = await axios.delete(baseUrl + id, data);
    return res.data
  } catch (error) {
    console.log(error);
    throw error;
  }
}