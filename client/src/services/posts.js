/* posts.js */
import axios from 'axios'
const baseUrl = '/api/posts/'


export const getAllPosts = async (type) => {
  const res = await axios.get(baseUrl)
  const { data } = res
  return data
}

export const getPost = async (id) => {
  const res = await axios.get(baseUrl + id);
  return res.data
}

export const createPost = async (post) => {
  try {
    const res = await axios.post(baseUrl, post);
    const { data } = res;
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

export const editPost = async (id, data) => {
  console.log ('idididid', id)
  console.log ('datatatata', data)

  const res = await axios.put(baseUrl + id + '/edit', data);
  return res.data
}

export const deletePost = async (id) => {
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
  console.log('urlDuplicate 실행')
  try {
  const res = await axios.post(baseUrl + 'urlduplicate', { params: { data } });
  console.log('urlDuplicate 실행', res)
  return res.data
} catch (error) {
  console.log(error)
  throw new Error('An error occurred while checking for URL duplicates.')
}
}

// 코드 활성화
export const activePost = async (id, couponCode) => {
  const res = await axios.put(baseUrl + id + '/active', { code: couponCode });
  return res.data;
}


// Like // Like // Like // Like // Like 
export const toggleLike = async (id) => {
  console.log ('idididid', id)
  const res = await axios.put(baseUrl + id + '/like')
  return res.data;
}