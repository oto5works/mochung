import axios from 'axios'
const baseUrl = '/api/coupons/'


export const getAllCoupons = async (type) => {
  const res = await axios.get(baseUrl)
  const { data } = res
  return data
}

export const getPost = async (id) => {
  const res = await axios.get(baseUrl + id);
  return res.data
}

export const createCoupon = async (post) => {
  console.log ('정보버거잇', post)
  try {
  const res = await axios.post(baseUrl, post)
  return res.data
} catch (error) {
  console.log(error);
  throw error; // re-throw the error to the caller
}
}


export const editPost = async (id, data) => {
  console.log ('idididid', id)
  console.log ('datatatata', data)

  const res = await axios.put(baseUrl + id + '/edit', data);
  return res.data
}

export const deleteCoupon = async (id) => {
  console.log ('삭제', id)
  try {
    const res = await axios.delete(baseUrl + id);
    return res.data
  } catch (error) {
    console.log(error);
    throw error;
  }
}



// url 중복 검사

export const urlDuplicate = async (data) => {
  try {
  const res = await axios.post(baseUrl + 'urlduplicate', { params: { data } });
  return res.data
} catch (error) {
  console.log(error)
  throw new Error('An error occurred while checking for URL duplicates.')
}
}

// 코드 활성화
export const activePost = async (id, data) => {
  console.log ('idididid', id)
  console.log ('datatatata', data)
  const res = await axios.put(baseUrl + id + '/active', data);
  return res.data
}


// Like // Like // Like // Like // Like 
export const toggleLike = async (id, userId, type) => {
  const res = await axios.put(baseUrl + id + '/likes', {userId, type})
  const { data } = res
  return data
}